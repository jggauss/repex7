const bodyParser = require('body-parser')
const clientes = require('./clientesRoute')
const industrias = require('./industriasRoute')
const vendedores = require('./vendedorRoute')
const produtos = require('./produtosRoute')
const pedidos = require('./pedidosRoute')
const express = require("express")

const handlebars = require("express-handlebars");

const moment = require("moment");
const app=express();


module.exports = app => {
    app.use(bodyParser.json())
    app.use(bodyParser.urlencoded({ extended : false }));
    app.use(clientes)
    app.use(industrias)
    app.use(vendedores)
    app.use(produtos)
    app.use(pedidos)
    
    app.engine('handlebars',handlebars({
    defaultLayout:'main',
    helpers: {
        formatDate: (date) => {
            return moment(date).format('DD/MM/YYYY')
        }
    },
    runtimeOptions: {
    allowProtoPropertiesByDefault: true,
    allowProtoMethodsByDefault: true,
},
}))

require('../routes')
app.set('view engine','handlebars');
app.use(express.static('./public'));
//app.use(express.static(__dirname+'public/appjs'));
app.use(express.static(__dirname+'../../views'));
app.use(express.static(__dirname+'../../views'));
app.use(express.static(__dirname+'./routes'));

}
    
    