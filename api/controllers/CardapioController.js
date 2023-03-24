const database = require('../models');

class CardapioController {
    // CRUD 
    // Read
    static async pegarCardapio(req, res){
        try {
            const cardapioTodo = await database.Cardapio.findAll()
            return res.status(200).json(cardapioTodo)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegarUmItem(req, res){
        const { id } = req.params
        try {
            const umItem = await database.Cardapio.findOne({ 
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umItem)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Create
    static async criaItemNoCardapio(req, res) {
        const novoItem = req.body
        try {
            const novoItemCriado = await database.Cardapio.create(novoItem)
            return res.status(200).json(novoItemCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Update
    static async atualizaCardapio(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Cardapio.update(novasInfos, { where: { id: Number(id)}})
            const cardapioAtualizado = await database.Cardapio.findOne({ where: { id: Number(id) }})
            return res.status(200).json(cardapioAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Delete
    static async apagaItemDoCardapio(req, res) {
        const { id } = req.params
        try {
            await database.Cardapio.destroy({ where: { id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
}
module.exports = CardapioController;