const { Router } = require('express')

const ClienteController = require('../controllers/ClienteController')

const router = Router()
router

.get('/mostrarUmCliente',function(req,res) {res.render(__dirname + "/views/mostrarUmCliente")})
.get('/tela-incluir-cliente',function(req,res) {res.render(__dirname + "/views/tela-incluir-cliente")})
.get('/clientestelaprincipal',function(req,res) {res.render(__dirname + "/views/clientestelaprincipal")})
.get('/index',function(req,res) {res.render(__dirname + "/views/index")})
.get('/clientes',ClienteController.pegaTodosOsClientes)
.get('/clientes/:id',ClienteController.pegaUmCliente)
.post('/clientes',ClienteController.criarUmCliente)
.put('/clientes/:id',ClienteController.atualizaCliente)
.delete('/clientes/:id',ClienteController.apagaCliente)



module.exports = router