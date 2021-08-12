'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Itens_pedidos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pedido_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{model:'Pedidos', key:'id'},
        onDelete: 'CASCADE'

        
      },    

      produto_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references:{model:'Produtos', key:'id'}
      },

      quantidade_item: {
        type: Sequelize.INTEGER
      },
      preco_item: {
        type: Sequelize.DECIMAL
      },
      valor_st_item: {
        type: Sequelize.DECIMAL
      },
      valor_acrescimo_item: {
        type: Sequelize.DECIMAL
      },
      valor_desconto_item: {
        type: Sequelize.DECIMAL
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
    return queryInterface.dropTable('Itens_pedidos');
  }
};