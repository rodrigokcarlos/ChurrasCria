const { Router } = require('express')
const RestauranteController = require('../controllers/RestauranteController')

const router = Router()

router.get('/restaurante', RestauranteController.pegarTodosRestaurante)
router.get('/restaurante/:id', RestauranteController.pegarUmRestaurante)
router.post('/restaurante', RestauranteController.criarRestaurante)
router.put('/restaurante/:id', RestauranteController.atualizaRestaurante)
router.delete('/restaurante/:id', RestauranteController.apagaRestaurante)

module.exports = router