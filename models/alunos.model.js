const moment = require('moment')
const conexao = require('../infraestrutura/conexao')

class aluno {
    adiciona(aluno, res) {
        console.log('aluno - api',aluno);
        const DT_CRIACAO = moment().format('YYYY-MM-DD')
        //const data = moment(aluno.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')

        // const dataEhValida = moment(data).isSameOrAfter(dataCriacao)
        // const clienteEhValido = aluno.cliente.length >= 5

        /*  const validacoes = [
             {
                 nome: 'data',
                 valido: dataEhValida,
                 mensagem: 'Data deve ser maior ou igual a data atual'
             },
             {
                 nome: 'cliente',
                 valido: clienteEhValido,
                 mensagem: 'Cliente deve ter pelo menos cinco caracteres'
             }
         ] */

        //const erros = validacoes.filter(campo => !campo.valido)
        //const existemErros = erros.length


        const alunoDatado = { ...aluno, DT_CRIACAO }

        const sql = 'INSERT INTO Alunos SET ?'

        conexao.query(sql, alunoDatado, (erro, resultados) => {
            console.log('sql:',sql);
            console.log('alunoDatado:',alunoDatado);
            console.log('resultados:',resultados);

            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(201).json(resultados)
            }
        })


    }

    lista(res) {
        const sql = 'SELECT * FROM Alunos'

        conexao.query(sql, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(resultados)
            }
        })
    }

    buscaPorId(id, res) {
        const sql = `SELECT * FROM Alunos WHERE id=${id}`

        conexao.query(sql, (erro, resultados) => {
            const aluno = resultados[0]
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json(aluno)
            }
        })
    }

    altera(id, valores, res) {
        if (valores.data) {
            valores.data = moment(valores.data, 'DD/MM/YYYY').format('YYYY-MM-DD HH:MM:SS')
        }
        const sql = 'UPDATE alunos SET ? WHERE id=?'

        conexao.query(sql, [valores, id], (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ ...valores, id })
            }
        })
    }

    deleta(id, res) {
        const sql = 'DELETE FROM alunos WHERE id=?'

        conexao.query(sql, id, (erro, resultados) => {
            if (erro) {
                res.status(400).json(erro)
            } else {
                res.status(200).json({ id })
            }
        })
    }
}

module.exports = new aluno