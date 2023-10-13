'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('Food', [{
      name: 'Soto Ayam',
      price: 15000,
      photo: 'soto.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    },{
      name: 'Rendang',
      price: 25000,
      photo: 'rendang.jpg',
      createdAt: new Date(),
      updatedAt: new Date()
    }]);
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Food', null, {});
  }
};
