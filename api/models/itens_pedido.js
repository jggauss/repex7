'use strict';

module.exports = (sequelize, DataTypes) => {
  const Itens_pedidos = sequelize.define('Itens_pedidos', {
   
    pedido_id: DataTypes.INTEGER,
    produto_id: DataTypes.INTEGER,
    quantidade_item: DataTypes.INTEGER,
    preco_item: DataTypes.DECIMAL,
    valor_st_item: DataTypes.DECIMAL,
    valor_acrescimo_item: DataTypes.DECIMAL,
    valor_desconto_item: DataTypes.DECIMAL
    }, {});
    Itens_pedidos.associate = function(models) {
      Itens_pedidos.belongsTo(models.Itens_pedidos,{ as: 'itens',
        foreignKey:'pedido_id' 
      })

      
      Itens_pedidos.belongsTo(models.Produtos,{
        foreignKey:'produto_id'
      })
    }
  return Itens_pedidos;
};

