'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {

    await queryInterface.bulkInsert('Linha_encomendas', [{
      preco_unitario: 33.90,
      pedido_id: 1,
      cardapio_id: 1,
      quantidade: 3,
      createdAt: new Date(),
      updatedAt: new Date()
    },
    {
      preco_unitario: 10.00,
      pedido_id: 2,
      cardapio_id: 2,
      quantidade: 1,
      createdAt: new Date(),
      updatedAt: new Date()
    }
  ], {});

  },

  async down (queryInterface, Sequelize) {
    await queryInterface.bulkDelete('Linha_encomendas', null, {});
  }
};
