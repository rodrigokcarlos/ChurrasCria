'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Pedidos', [{
      total: 150.00,
      data: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      cliente_id: 1
    },
    {
      total: 10.00,
      data: new Date(),
      createdAt: new Date(),
      updatedAt: new Date(),
      cliente_id: 2
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Pedidos', null, {});
  }
};
