const { Router } = require('express')

const VendedorController = require('../controllers/VendedorController')

const router = Router()
router

.get('/tela-incluir-vendedores',function(req,res) {res.render(__dirname + "/views/tela-incluir-vendedores")})
.get('/vendedoresTelaPrincipal',function(req,res) {res.render(__dirname + "/views/vendedoresTelaPrincipal")})
.get('/vendedores',VendedorController.pegaTodosOsVendedores)
.get('/vendedores/:id',VendedorController.pegaUmVendedor)
.post('/vendedores',VendedorController.criarUmVendedor)
.put('/vendedores/:id',VendedorController.atualizaVendedor)
.delete('/vendedores/:id',VendedorController.apagaVendedor)

module.exports = router