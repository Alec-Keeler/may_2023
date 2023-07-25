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
    const {Group} = require('../models')
    await Group.bulkCreate([
      { name: 'Stan Rogers', numFollowers: 10000 },
      { name: 'Snow Patrol', numFollowers: 239487 },
      { name: 'Tom Misch', numFollowers: 98242 },
      { name: 'Phish', numFollowers: 87634 },
      { name: 'Sidhu Moosewala', numFollowers: 29364152 },
      { name: 'The Grateful Dead', numFollowers: 352741 },
      { name: 'deadmau5', numFollowers: 876345 }
    ], {validate: true})
      

  //  await queryInterface.bulkInsert('Groups', [
  //    { name: 'Stan Rogers', numFollowers: 10000 },
  //    { name: 'Snow Patrol', numFollowers: 239487 },
  //    { name: 'Tom Misch', numFollowers: 98242 },
  //    { name: 'Phish', numFollowers: 87634 },
  //    { name: 'Sidhu Moosewala', numFollowers: 29364152 },
  //    { name: 'The Grateful Dead', numFollowers: 352741 },
  //    { name: 'deadmau5', numFollowers: 876345 }
  //  ])
  //  INSERT INTO Groups (name, numFollowers)
  // VALUES
  // ...
  },

  async down (queryInterface, Sequelize) {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
    await queryInterface.bulkDelete('Groups')
    // await queryInterface.bulkDelete('Groups', {
    //   name: ['Stan Rogers', 'Snow Patrol']
    // }) // DELETE FROM Groups WHERE name IN ();
  }
};
