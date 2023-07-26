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
    const { SongGenre } = require('../models')
    await SongGenre.bulkCreate([
      {genreId: 2, songId: 1},
      {genreId: 7, songId: 1},
      {genreId: 2, songId: 2},
      {genreId: 7, songId: 3},
      {genreId: 7, songId: 4},
      {genreId: 5, songId: 5},
      {genreId: 4, songId: 6},
      {genreId: 3, songId: 7},
      {genreId: 6, songId: 8},
      {genreId: 5, songId: 8}
    ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('SongGenres')
  }
};
