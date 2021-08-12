'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pedidos', {
        id: {
          allowNull: false,
          autoIncrement: true,
          primaryKey: true,
          type: Sequelize.INTEGER
        },
        cliente_id: {
          allowNull: false,
          type: Sequelize.INTEGER,
          references:{model: 'Clientes',key:'id'}
        },
        vendedor_id: {
          allowNull:false,
          type: Sequelize.INTEGER,
          references:{model:'Vendedores', key:'id'}
        },
        industria_id: {
          allowNull:false,
          type: Sequelize.INTEGER,
          references:{model:'Industrias', key:'id'}
        },
        frete: {
          type: Sequelize.DECIMAL
        },
        valor_total: {
          type: Sequelize.DECIMAL
        },
        valor_st_total: {
          type: Sequelize.DECIMAL
        },
        valor_desconto_total: {
          type: Sequelize.DECIMAL
        },
        valor_acrescimo_total: {
          type: Sequelize.DECIMAL
        },
        status_pedido: {
          type: Sequelize.ENUM('ABERTO', 'ENVIADO', 'FATURADO', 'DESPACHADO', 'CANCELADO', 'DEVOLVIDO', 'RECUSADO', 'DEVOLVIDO_CLIENTE', 'AGUARDANDO', 'ANALISE', 'PROBLEMA')
        },
        faturado: {
          type: Sequelize.BOOLEAN
        },
        nota_fiscal: {
          type: Sequelize.STRING
        },
        vencimento_boleto: {
          type: Sequelize.DATE
        },
        data_prevista_pagamento: {
          type: Sequelize.DATE
        },
        status_comissao: {
          type: Sequelize.ENUM('ABERTO', 'PAGO', 'CANCELADO', 'DEVOLVIDO', 'ATRASADO', 'INADIMPLENTE', 'DEMAIS')
        },
        createdAt: {
          allowNull: false,
          type: Sequelize.DATE
        },
        updatedAt: {
          allowNull: false,
          type: Sequelize.DATE
        }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pedidos');
  }
};