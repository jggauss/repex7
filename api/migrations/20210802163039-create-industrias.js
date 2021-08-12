'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Industrias', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      cnpj: {
        type: Sequelize.STRING
      },
      ie: {
        type: Sequelize.STRING
      },
      razao_social: {
        type: Sequelize.STRING
      },
      nome_fantasia: {
        type: Sequelize.STRING
      },
      logradouro: {
        type: Sequelize.STRING
      },
      numero: {
        type: Sequelize.STRING
      },
      complemento: {
        type: Sequelize.STRING
      },
      bairro: {
        type: Sequelize.STRING
      },
      cidade: {
        type: Sequelize.STRING
      },
      uf: {
        type: Sequelize.STRING
      },
      cep: {
        type: Sequelize.STRING
      },
      email_contato: {
        type: Sequelize.STRING
      },
      email_xml: {
        type: Sequelize.STRING
      },
      telefone1: {
        type: Sequelize.STRING
      },
      telefone2: {
        type: Sequelize.STRING
      },
      comissao: {
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
  down: async (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Industrias');
  }
};