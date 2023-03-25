'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Restaurantes extends Model {
    static associate(models) {
      Restaurantes.hasMany(models.Cardapio, {foreignKey: 'restaurante_id'})
    }
  }
  Restaurantes.init({
    nome: DataTypes.STRING,
    endereco: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Restaurantes',
  });
  return Restaurantes;
};