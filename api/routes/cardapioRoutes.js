const { Router } = require('express')
const CardapioController = require('../controllers/CardapioController')

const router = Router()

router.get('/cardapio', CardapioController.pegarCardapio)
router.get('/cardapio/:id', CardapioController.pegarUmItem)
router.post('/cardapio', CardapioController.criaItemNoCardapio)
router.put('/cardapio/:id', CardapioController.atualizaCardapio)
router.delete('/cardapio/:id', CardapioController.apagaItemDoCardapio)

module.exports = router