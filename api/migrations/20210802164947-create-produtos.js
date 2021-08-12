'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Produtos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      sku: {
        type: Sequelize.STRING
      },
      nome_produto: {
        type: Sequelize.STRING
      },
      preco: {
        type: Sequelize.DECIMAL
      },
      peso_bruto: {
        type: Sequelize.DECIMAL
      },
      altura: {
        type: Sequelize.DECIMAL
      },
      largura: {
        type: Sequelize.DECIMAL
      },
      comprimento: {
        type: Sequelize.DECIMAL
      },
      fabricante_id: {
        allowNull:false,
        type: Sequelize.INTEGER,
        references: {model:'Industrias',key:'id'}
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
    return queryInterface.dropTable('Produtos');
  }
};