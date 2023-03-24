const { Router } = require('express')
const PedidoController = require('../controllers/PedidoController')

const router = Router()

router.get('/pedido', PedidoController.pegarTodosPedido)
router.get('/pedido/:id', PedidoController.pegarUmPedido)
router.post('/pedido', PedidoController.criarPedido)
router.put('/pedido/:id', PedidoController.atualizaPedido)
router.delete('/pedido/:id', PedidoController.apagaPedido)

module.exports = router