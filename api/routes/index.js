const bodyParser = require('body-parser')
const clientes = require('./clientesRoutes')
const cardapios = require('./cardapioRoutes')
const pedidos = require('./pedidoRoutes')

module.exports = app => {
    app.use(
        bodyParser.json(),
        clientes,
        cardapios,
        pedidos
        )
}