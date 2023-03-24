'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Linha_encomendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      pedido_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Pedidos', key: 'id'}
      },
      cardapio_id: {
        allowNull: false,
        type: Sequelize.INTEGER,
        references: { model: 'Cardapios', key: 'id'}
      },
      preco_unitario: {
        type: Sequelize.FLOAT
      },
      quantidade: {
        type: Sequelize.INTEGER
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
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Linha_encomendas');
  }
};