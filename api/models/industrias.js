'use strict';
module.exports = (sequelize, DataTypes) => {
  const Industrias = sequelize.define ('Industrias', {

    cnpj: DataTypes.STRING,
    ie: DataTypes.STRING,
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
    comissao: DataTypes.DECIMAL
    
    }, {});
    Industrias.associate = function(models) {
      Industrias.hasMany(models.Produtos,{
        foreignKey:'fabricante_id'
      })
      Industrias.hasMany(models.Pedidos,{
        foreignKey:'industria_id'
      })

    }
    
  return Industrias;
};