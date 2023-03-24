'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Clientes', [{
        nome: 'Johnny Deep',
        endereco: 'Santa Cruz',
        createdAt: new Date(),
        updatedAt: new Date()
    },
    {
        nome: 'Maicon Douglas',
        endereco: 'Meier',
        createdAt: new Date(),
        updatedAt: new Date()
    }

    ], {});
  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Clientes', null, {});
  }
};
