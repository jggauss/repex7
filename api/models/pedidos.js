'use strict';
module.exports = (sequelize, DataTypes) => {
  const Pedidos = sequelize.define('Pedidos', {
    cliente_id: DataTypes.INTEGER,
    vendedor_id: DataTypes.INTEGER,
    industria_id: DataTypes.INTEGER,
    frete: DataTypes.DECIMAL,
    valor_total: DataTypes.DECIMAL,
    valor_st_total: DataTypes.DECIMAL,
    valor_desconto_total: DataTypes.DECIMAL,
    valor_acrescimo_total: DataTypes.DECIMAL,
    status_pedido: DataTypes.ENUM('ABERTO', 'ENVIADO', 'FATURADO', 'DESPACHADO', 'CANCELADO', 'DEVOLVIDO', 'RECUSADO', 'DEVOLVIDO_CLIENTE', 'AGUARDANDO', 'ANALISE', 'PROBLEMA'),
    faturado: DataTypes.BOOLEAN,
    nota_fiscal: DataTypes.STRING,
    vencimento_boleto: DataTypes.DATE,
    data_prevista_pagamento: DataTypes.DATE,
    status_comissao: DataTypes.ENUM('ABERTO', 'PAGO', 'CANCELADO', 'DEVOLVIDO', 'ATRASADO', 'INADIMPLENTE', 'DEMAIS')
    }, {});

    Pedidos.associate = function(models) {
      Pedidos.hasMany(models.Itens_pedidos,{
        foreignKey:'pedido_id'
      })
      Pedidos.belongsTo(models.Clientes,{
        foreignKey:'cliente_id'
      })
      Pedidos.belongsTo(models.Vendedores,{
        foreignKey:'vendedor_id'
      })
      Pedidos.belongsTo(models.Industrias,{
        foreignKey:'industria_id'
      })


    };
  
  return Pedidos;
};








