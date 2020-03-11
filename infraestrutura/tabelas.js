class Tabelas {
    init(conexao) {
        this.conexao = conexao

        this.criarAtendimentos();
        this.criarAlunos();
    }

    criarAtendimentos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Atendimentos (id int NOT NULL AUTO_INCREMENT, cliente varchar(50) NOT NULL, pet varchar(20), servico varchar(20) NOT NULL, data datetime NOT NULL, dataCriacao datetime NOT NULL, status varchar(20) NOT NULL, observacoes text, PRIMARY KEY(id))'

        this.conexao.query(sql, erro => {
            if (erro) {
                console.log(erro);
            } else {
                console.log('Tabela Atendimentos criada com sucesso');
            }
        })
    }

    criarAlunos() {
        const sql = 'CREATE TABLE IF NOT EXISTS Alunos (id int NOT NULL AUTO_INCREMENT, NM_NOME_COMPLETO varchar(50), DS_TURMA varchar(30), DS_STATUS varchar(20), DT_CRIACAO date, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            }else{
                console.log('tabela alunos criada com sucesso!')
            }
        })
    }
}

module.exports = new Tabelas