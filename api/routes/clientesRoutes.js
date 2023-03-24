const { Router } = require('express')
const ClienteController = require('../controllers/ClienteController')

const router = Router()

router.get('/clientes', ClienteController.pegaTodosClientes)
router.get('/clientes/:id', ClienteController.pegaUmCliente)
router.post('/clientes', ClienteController.criaCliente)
router.put('/clientes/:id', ClienteController.atualizaCliente)
router.delete('/clientes/:id', ClienteController.apagaCliente)

module.exports = router