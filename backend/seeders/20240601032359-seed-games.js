'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up (queryInterface, Sequelize) {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
    await queryInterface.bulkInsert('Games', [
      {
        title: 'Call of Duty MW2',
        price: 49.99,
        imageUrl: 'images/game1.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'GTA V',
        price: 59.99,
        imageUrl: 'images/game2.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Red Dead Redemption 2',
        price: 69.99,
        imageUrl: 'images/game3.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Apex Legends',
        price: 0.00,
        imageUrl: 'images/game4.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'GTA VI',
        price: 79.99,
        imageUrl: 'images/game5.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Forza Horizon 5',
        price: 59.99,
        imageUrl: 'images/game6.webp',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'GTA San Andreas',
        price: 39.99,
        imageUrl: 'images/game7.jpeg',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        title: 'Crew 2',
        price: 49.99,
        imageUrl: 'images/game8.jpg',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], {})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Games', null, {});
  }
};
