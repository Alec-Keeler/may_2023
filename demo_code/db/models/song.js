'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Song extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Song.belongsToMany(models.Genre, {
        through: models.SongGenre,
        foreignKey: 'songId',
        otherKey: 'genreId'
      })
      Song.belongsTo(models.Album, {
        foreignKey: 'albumId'
      })
      // SELECT * FROM Songs
      // JOIN SongGenres ON (Songs.id = SongGenres.songId)
      // JOIN Genres ON (Genres.id = SongGenres.genreId)
    }
  }
  Song.init({
    title: DataTypes.STRING,
    length: DataTypes.DECIMAL,
    songOrder: DataTypes.INTEGER,
    single: DataTypes.BOOLEAN,
    albumId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Song',
  });
  return Song;
};