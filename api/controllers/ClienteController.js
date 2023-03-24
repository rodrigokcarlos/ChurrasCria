const database = require('../models');

class ClienteController {
    // CRUD 
    // Read
    static async pegaTodosClientes(req, res){
        try {
            const todosClientes = await database.Cliente.findAll()
            return res.status(200).json(todosClientes)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegaUmCliente(req, res){
        const { id } = req.params
        try {
            const umCliente = await database.Cliente.findOne({ 
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umCliente)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Create
    static async criaCliente(req, res) {
        const novoCliente = req.body
        try {
            const novoClienteCriado = await database.Cliente.create(novoCliente)
            return res.status(200).json(novoClienteCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Update
    static async atualizaCliente(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Cliente.update(novasInfos, { where: { id: Number(id)}})
            const clienteAtualizado = await database.Cliente.findOne({ where: { id: Number(id) }})
            return res.status(200).json(clienteAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Delete
    static async apagaCliente(req, res) {
        const { id } = req.params
        try {
            await database.Cliente.destroy({ where: { id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}
module.exports = ClienteController;