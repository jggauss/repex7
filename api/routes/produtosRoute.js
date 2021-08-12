const { Router } = require('express')

const ProdutoController = require('../controllers/ProdutoController')

const router = Router()
router

.get('/tela-incluir-produtos',function(req,res) {res.render(__dirname + "/views/tela-incluir-produtos")})
.get('/produtosTelaPrincipal',function(req,res) {res.render(__dirname + "/views/produtosTelaPrincipal")})
.get('/produtos',ProdutoController.pegaTodosOsProdutos)
.get('/produtos/:id',ProdutoController.pegaUmProduto)
.post('/produtos',ProdutoController.criarUmProduto)
.put('/produtos/:id',ProdutoController.atualizaProduto)
.delete('/produtos/:id',ProdutoController.apagaProduto)

module.exports = router