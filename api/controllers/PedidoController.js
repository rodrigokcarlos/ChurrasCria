const database = require('../models');

class PedidoController {
    // CRUD 
    // Read
    static async pegarTodosPedido(req, res){
        try {
            const pegarPedido = await database.Pedido.findAll()
            return res.status(200).json(pegarPedido)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    static async pegarUmPedido(req, res){
        const { id } = req.params
        try {
            const umPedido = await database.Pedido.findOne({ 
                where: {
                    id: Number(id)
                }
            })
            return res.status(200).json(umPedido)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Create
    static async criarPedido(req, res) {
        const novoPedido = req.body
        try {
            const novoPedidoCriado = await database.Pedido.create(novoPedido)
            return res.status(200).json(novoPedidoCriado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Update
    static async atualizaPedido(req, res) {
        const { id } = req.params
        const novasInfos = req.body
        try {
            await database.Pedido.update(novasInfos, { where: { id: Number(id)}})
            const pedidoAtualizado = await database.Pedido.findOne({ where: { id: Number(id) }})
            return res.status(200).json(pedidoAtualizado)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Delete
    static async apagaPedido(req, res) {
        const { id } = req.params
        try {
            await database.Pedido.destroy({ where: { id: Number(id)}})
            return res.status(200).json({mensagem: `id ${id} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }


    // Carrinho/encomenda
    // Read
    static async pegaUmaEncomenda(req, res){
        const { pedidoId, encomendaId } = req.params
        try {
            const pegaEncomenda = await database.Linha_encomenda.findOne({ 
                where: {
                    id: Number(encomendaId),
                    pedido_id: Number(pedidoId)
                }
            })
            return res.status(200).json(pegaEncomenda)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Create
    static async criaEncomenda(req, res) {
        const { pedidoId } = req.params
        const novaEncomenda = { ...req.body, pedido_id: Number(pedidoId) }
        try {
            const novaEncomendaCriada = await database.Linha_encomenda.create(novaEncomenda)
            return res.status(200).json(novaEncomendaCriada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Update
    static async atualizaEncomenda(req, res) {
        const { pedidoId, encomendaId } = req.params
        const novasInfos = req.body
        try {
            await database.Linha_encomenda.update(novasInfos, 
                { where: { 
                    id: Number(encomendaId),
                    pedido_id: Number(pedidoId)
                }})
            const encomendaAtualizada = await database.Linha_encomenda.findOne({ where: { id: Number(encomendaId) }})
            return res.status(200).json(encomendaAtualizada)
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }
    // Delete
    static async apagaEncomenda(req, res) {
        const { pedidoId, encomendaId } = req.params
        try {
            await database.Linha_encomenda.destroy({ where: { 
                id: Number(encomendaId)
            }})
            return res.status(200).json({mensagem: `id ${encomendaId} deletado`})
        } catch (error) {
            return res.status(500).json(error.message)
        }
    }

}
module.exports = PedidoController;