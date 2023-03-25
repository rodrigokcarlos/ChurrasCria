'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Cardapio extends Model {
    static associate(models) {
      Cardapio.hasMany(models.Linha_encomenda, {foreignKey: 'cardapio_id'})
      Cardapio.belongsTo(models.Restaurantes, {foreignKey: 'cardapio_id'})
    }
  }
  Cardapio.init({
    descricao: DataTypes.STRING,
    preco: DataTypes.FLOAT
  }, {
    sequelize,
    modelName: 'Cardapio',
  });
  return Cardapio;
};