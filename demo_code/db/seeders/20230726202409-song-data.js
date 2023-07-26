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
    const { Song } = require('../models')
    await Song.bulkCreate([
      { title: 'Lifeboats', length: 4.42, songOrder: 4, single: false, albumId: 1 },
      { title: 'Crack the Shutters', length: 3.2, songOrder: 2, single: false, albumId: 1 },
      { title: "Fogarty's Cove", length: 2.1, songOrder: 2, single: false, albumId: 2 },
      { title: "Barrett's Privateers", length: 4.14, songOrder: 5, single: false, albumId: 2 },
      { title: 'Before Paris', length: 2.29, songOrder: 1, single: false, albumId: 3 },
      { title: 'Lost In Paris', length: 3.14, songOrder: 2, single: false, albumId: 3 },
      { title: "Ghosts 'n' Stuff", length: 5.28, songOrder: 1, single: false, albumId: 6 },
      { title: 'Some Chords', length: 7.27, songOrder: 4, single: false, albumId: 6 }
    ], {validate: true})
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Songs')
  }
};
