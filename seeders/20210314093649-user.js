'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
     */
    await queryInterface.bulkInsert(
      'users',
      [
        {
          name: 'Test User',
          username: 'test_user',
          email: 'user@test.com',
          password: '$2b$10$szTgu.pFo3ojdWFBa7qSLeh9.FWTggrSVtxRcqBHIGaCdtiJcOZDC',
          address: 'Jakarta, Indonesia',
          birthdate: new Date('01-01-1991'),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('users', null, {});
  },
};
