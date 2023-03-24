'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Linha_encomenda extends Model {
    static associate(models) {
      Linha_encomenda.belongsTo(models.Pedido, {foreignKey: 'pedido_id'})
      Linha_encomenda.belongsTo(models.Cardapio, {foreignKey: 'cardapio_id'})
    }
  }
  Linha_encomenda.init({
    preco_unitario: DataTypes.FLOAT,
    quantidade: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Linha_encomenda',
  });
  return Linha_encomenda;
};