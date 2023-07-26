'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Album extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Album.belongsTo(models.Group, {
        foreignKey: 'groupId'
      })
      Album.hasMany(models.Song, {
        foreignKey: 'albumId',
        onDelete: 'CASCADE',
        hooks: true
      })
      // SELECT * FROM Albums
      // JOIN Groups ON (Groups.id = Albums.groupId)
    }
  }
  Album.init({
    title: {
      type: DataTypes.STRING,
      allowNull: false
    },
    releaseYear: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
    length: {
      type: DataTypes.DECIMAL,
      allowNull: false
    },
    groupId: {
      type: DataTypes.INTEGER,
      allowNull: false
    },
  }, {
    sequelize,
    modelName: 'Album',
  });
  return Album;
};