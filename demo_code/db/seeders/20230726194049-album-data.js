'use strict';

const data = [
  {
    name: 'Stan Rogers', albums: [
      { title: "Fogerty's Cove", releaseYear: 1977, length: 39.5 },
      { title: 'Chet Baker Sings', releaseYear: 1956, length: 44.21 },
    ]
  },
  {
    name: 'Snow Patrol', albums: [
      { title: 'A Hundred Million Suns', releaseYear: 2008, length: 58.25 },
      { title: 'Hot Rats', releaseYear: 1969, length: 43.11 },
    ]
  },
  {
    name: 'Tom Misch', albums: [
      { title: 'Geography', releaseYear: 2018, length: 52.33 },
      { title: 'FEELS', releaseYear: 2017, length: 41.30 },
    ]
  },
  {
    name: 'Phish', albums: [
      { title: 'Worlds', releaseYear: 2014, length: 57.82 },
      { title: 'Rift', releaseYear: 1993, length: 67.44 },
    ]
  },
  {
    name: 'Sidhu Moosewala', albums: [
      { title: 'Moosetape', releaseYear: 2021, length: 97.00 },
      { title: 'American Beauty', releaseYear: 1970, length: 42.21 },
    ]
  },
  {
    name: 'The Grateful Dead', albums: [
      { title: '5 Years of mau5', releaseYear: 2014, length: 134.12 }
    ]
  }
]

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
    const {Album, Group} = require('../models')
    for (let i = 0; i < data.length; i++) {
      const groupData = data[i];
      const group = await Group.findOne({
        where: {
          name: groupData.name
        }
      })
      const albums = groupData.albums
      for (let j = 0; j < albums.length; j++) {
        const album = albums[j];
        // await group.createAlbum({
        //   title: album.title,
        //   releaseYear: album.releaseYear,
        //   length: album.length,
        // })
        await Album.create({
          title: album.title,
          releaseYear: album.releaseYear,
          length: album.length,
          groupId: group.id
        })
      }
    }









  //  await Album.bulkCreate([
  //    { title: 'A Hundred Million Suns', releaseYear: 2008, length: 58.25, groupId: 2 },
  //    { title: "Fogerty's Cove", releaseYear: 1977, length: 39.5, groupId: 1 },
  //    { title: 'Geography', releaseYear: 2018, length: 52.33, groupId: 3 },
  //    { title: 'Worlds', releaseYear: 2014, length: 57.82, groupId: 4 },
  //    { title: 'Moosetape', releaseYear: 2021, length: 97.00, groupId: 5 },
  //    { title: 'American Beauty', releaseYear: 1970, length: 42.21, groupId: 5 },
  //    { title: 'Chet Baker Sings', releaseYear: 1956, length: 44.21, groupId: 1 },
  //    { title: 'Hot Rats', releaseYear: 1969, length: 43.11, groupId: 2 },
  //    { title: 'FEELS', releaseYear: 2017, length: 41.30, groupId: 3 },
  //    { title: 'Rift', releaseYear: 1993, length: 67.44, groupId: 4 },
  //    { title: '5 Years of mau5', releaseYear: 2014, length: 134.12, groupId: 6 }
  //  ], {validate: true})

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
