'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Pedido extends Model {

    static associate(models) {
      Pedido.hasMany(models.Linha_encomenda, {foreignKey: 'pedido_id'})
      Pedido.belongsTo(models.Cliente, {foreignKey: 'cliente_id'})
    }
  }
  Pedido.init({
    total: DataTypes.FLOAT,
    data: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Pedido',
  });
  return Pedido;
};