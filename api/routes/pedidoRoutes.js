const { Router } = require('express')
const PedidoController = require('../controllers/PedidoController')

const router = Router()

router.get('/pedido', PedidoController.pegarTodosPedido)
router.get('/pedido/:id', PedidoController.pegarUmPedido)
router.post('/pedido', PedidoController.criarPedido)
router.put('/pedido/:id', PedidoController.atualizaPedido)
router.delete('/pedido/:id', PedidoController.apagaPedido)
router.get('/pedido/:pedidoId/encomenda/:encomendaId', PedidoController.pegaUmaEncomenda)
router.post('/pedido/:pedidoId/encomenda', PedidoController.criaEncomenda)
router.put('/pedido/:pedidoId/encomenda/:encomendaId', PedidoController.atualizaEncomenda)
router.delete('/pedido/:pedidoId/encomenda/:encomendaId', PedidoController.apagaEncomenda)

module.exports = router