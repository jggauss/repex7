'use strict';

module.exports = (sequelize, DataTypes) => {
  const Produtos = sequelize.define('Produtos', {
    sku: DataTypes.STRING,
    nome_produto: DataTypes.STRING,
    preco: DataTypes.DECIMAL,
    peso_bruto: DataTypes.DECIMAL,
    altura: DataTypes.DECIMAL,
    largura: DataTypes.DECIMAL,
    comprimento: DataTypes.DECIMAL,
    fabricante_id: DataTypes.INTEGER
    }, {});

    Produtos.associate = function(models) {
      Produtos.hasMany(models.Itens_pedidos,{foreignKey:'produto_id'})
      Produtos.belongsTo(models.Industrias,{foreignKey:'fabricante_id'})

    }
    
  return Produtos;
};  


    