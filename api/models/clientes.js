'use strict';

const Pedidos = require("./pedidos");

module.exports = (sequelize, DataTypes) => {
  const Clientes = sequelize.define('Clientes', {

      cnpj: DataTypes.STRING,
      razao_social: DataTypes.STRING,
      nome_fantasia: DataTypes.STRING,
      logradouro: DataTypes.STRING,
      numero: DataTypes.STRING,
      complemento: DataTypes.STRING,
      bairro: DataTypes.STRING,
      cidade: DataTypes.STRING,
      uf: DataTypes.STRING,
      cep: DataTypes.STRING,
      email_contato: DataTypes.STRING,
      email_xml: DataTypes.STRING,
      telefone1: DataTypes.STRING,
      telefone2: DataTypes.STRING,
      vendedor: DataTypes.INTEGER
    }, {});
    Clientes.associate = function(models) {
      Clientes.hasMany(models.Pedidos,{
        foreignKey:'cliente_id'
      })
      Clientes.belongsTo(models.Vendedores,{
        foreignKey:'vendedor'
      })
      


    }
    
   
    
  return Clientes;
};