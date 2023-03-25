'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Cardapios', [{
      descricao: 'Medalhão de Picanha',
      preco: 33.90,
      restaurante_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      descricao: 'Coca-cola',
      preco: 10.00,
      restaurante_id: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Cardapios', null, {});
  }
};
