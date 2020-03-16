const customExpress = require('./config/customExpress')
const conexao = require('./infraestrutura/conexao')
const Tabelas = require('./infraestrutura/tabelas')

const firebaseConfig = {
    apiKey: "AIzaSyDiivFGix_Ue62gcC0SaN-JZrtieq-B-5w",
    authDomain: "api-node-dasa.firebaseapp.com",
    databaseURL: "https://api-node-dasa.firebaseio.com",
    projectId: "api-node-dasa",
    storageBucket: "api-node-dasa.appspot.com",
    messagingSenderId: "102363352298",
    appId: "1:102363352298:web:568b5d5b48e097e6599b93"
  };

conexao.connect(erro => {
    if(erro) {
        console.log(erro)
    } else {
        console.log('conectado com sucesso')
        
        Tabelas.init(conexao)
        
        const app = customExpress()

        app.listen(3000, () => console.log('Servidor rodando na porta 3000'))
    }
})
