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
   const { Genre } = require('../models')
   await Genre.bulkCreate([
     {name: 'Rock'},
     {name: 'Pop'},
     {name: 'Blues'},
     {name: 'Hip hop'},
     {name: 'Classical'},
     {name: 'Heavy Metal'},
     {name: 'Folk'}
   ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Genres')
  }
};
