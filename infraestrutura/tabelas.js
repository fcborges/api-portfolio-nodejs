class Tabelas {
    init(conexao) {
        this.conexao = conexao
        this.criarLaboratorios();
        this.criarExames();

    }

    criarLaboratorios() {
        const sql = 'CREATE TABLE IF NOT EXISTS Laboratorios (id int NOT NULL AUTO_INCREMENT, exameId int, nome varchar(50), endereco varchar(30), status varchar(20), dataInclusao date, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('tabela Laboratorios criada com sucesso!')
            }
        })
    }

    criarExames() {
        const sql = 'CREATE TABLE IF NOT EXISTS Exames (id int NOT NULL AUTO_INCREMENT, nome varchar(50), tipo varchar(30), status varchar(20), dataInclusao date, PRIMARY KEY(id))'

        this.conexao.query(sql, (erro) => {
            if (erro) {
                console.log(erro)
            } else {
                console.log('tabela exames criada com sucesso!')
            }
        })
    }

}

module.exports = new Tabelas