const Alunos = require('../models/alunos.model')

module.exports = app => {
    var cors = require('cors')

    app.use(cors())
    app.get('/alunos', (req, res) => {
        Alunos.lista(res)
    })

    app.get('/alunos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Alunos.buscaPorId(id, res)
    })

    app.post('/alunos', (req, res) => {
        const alunos = req.body
        console.log('alunos.controller ->', alunos);

        Alunos.adiciona(alunos, res)
    })

    app.patch('/alunos/:id', (req, res) => {
        const id = parseInt(req.params.id)
        const valores = req.body

        Alunos.altera(id, valores, res)
    })

    app.delete('/alunos/:id', (req, res) => {
        const id = parseInt(req.params.id)

        Alunos.deleta(id, res)
    })
}