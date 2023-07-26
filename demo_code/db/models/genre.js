'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Genre extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Genre.belongsToMany(models.Song, {
        through: models.SongGenre,
        foreignKey: 'genreId',
        otherKey: 'songId'
      })
      // SELECT * FROM Genres
      // JOIN SongGenres ON (Genres.id = SongGenres.genreId)
      // JOIN Songs ON (Songs.id = SongGenres.songId)
    }
  }
  Genre.init({
    name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Genre',
  });
  return Genre;
};