'use strict';
module.exports = (sequelize, DataTypes) => {
  const Vendedores = sequelize.define ('Vendedores',  {
    nome: DataTypes.STRING,
    email: DataTypes.STRING,
    telefone: DataTypes.STRING,
    comissao: DataTypes.STRING,

    
  },{});

  Vendedores.associate = function(models) {
    Vendedores.hasMany(models.Pedidos,{
      foreignKey:'vendedor_id'
    })
    Vendedores.hasMany(models.Clientes,{
      foreignKey:'vendedor'
    })

  }
  
  return Vendedores;
};