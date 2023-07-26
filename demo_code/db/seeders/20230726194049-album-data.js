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
   const {Album} = require('../models')
   await Album.bulkCreate([
     { title: 'A Hundred Million Suns', releaseYear: 2008, length: 58.25, groupId: 2 },
     { title: "Fogerty's Cove", releaseYear: 1977, length: 39.5, groupId: 1 },
     { title: 'Geography', releaseYear: 2018, length: 52.33, groupId: 3 },
     { title: 'Worlds', releaseYear: 2014, length: 57.82, groupId: 4 },
     { title: 'Moosetape', releaseYear: 2021, length: 97.00, groupId: 5 },
     { title: 'American Beauty', releaseYear: 1970, length: 42.21, groupId: 5 },
     { title: 'Chet Baker Sings', releaseYear: 1956, length: 44.21, groupId: 1 },
     { title: 'Hot Rats', releaseYear: 1969, length: 43.11, groupId: 2 },
     { title: 'FEELS', releaseYear: 2017, length: 41.30, groupId: 3 },
     { title: 'Rift', releaseYear: 1993, length: 67.44, groupId: 4 },
     { title: '5 Years of mau5', releaseYear: 2014, length: 134.12, groupId: 6 }
   ], {validate: true})

  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Albums')
  }
};
