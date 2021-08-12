const { Router } = require('express')

const PedidosController = require('../controllers/PedidosController')

const router = Router()
router

.get('/pedidos',PedidosController.pegaTodosOsPedidos)
.get('/pedidos/:id',PedidosController.pegaUmPedido)
.post('/pedidos',PedidosController.criarUmPedido)
.put('/pedidos/:id',PedidosController.atualizaPedido)
.delete('/pedidos/:id',PedidosController.apagaPedido)

module.exports = router