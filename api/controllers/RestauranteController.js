const database = require('../models');

class RestauranteController {
    // CRUD 
    // Read
    static async pegarTodosRestaurante(req, res){
        try {
            const todosRestaurante = await database.Restaurantes.findAll()
            return res.status(200).json(todosRestaurante)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegarUmRestaurante(req, res){
        const { id } = req.params
        try {
            const umRestaurante = await database.Restaurantes.findOne({ 
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umRestaurante)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Create
    static async criarRestaurante(req, res) {
        const novoRestaurante = req.body
        try {
            const novoRestauranteCriado = await database.Restaurantes.create(novoRestaurante)
            return res.status(200).json(novoRestauranteCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Update
    static async atualizaRestaurante(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Cliente.update(novasInfos, { where: { id: Number(id)}})
            const clienteAtualizado = await database.Restaurantes.findOne({ where: { id: Number(id) }})
            return res.status(200).json(RestauranteAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Delete
    static async apagaRestaurante(req, res) {
        const { id } = req.params
        try {
            await database.Restaurantes.destroy({ where: { id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}
module.exports = RestauranteController;