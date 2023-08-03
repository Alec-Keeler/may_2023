'use strict';
const { Op } = require("sequelize");
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Group extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Group.hasMany(models.Album, {
        foreignKey: 'groupId',
        onDelete: 'CASCADE',
        hooks: true
      })
      // SELECT * FROM Groups
      // JOIN Albums ON (Groups.id = Albums.groupId)
    }
  }
  Group.init({
    name: {
      type: DataTypes.STRING(250),
      allowNull: false,
      unique: true,
      validate: {
        len: {
          args: [3, 250],
          msg: 'Your group name must be between 3 and 250 chars'
        }
      }
    },
    numFollowers: {
      type: DataTypes.INTEGER,
      allowNull: false,
      validate: {
        min: 1000,
        max: 100000000
      }
    },
    // yearEstablished: {
    //   type: DataTypes.INTEGER,
    //   allowNull: false,
    // }
  }, {
    sequelize,
    modelName: 'Group',
    defaultScope: {
      attributes: {
        exclude: ['createdAt', 'updatedAt']
      }
    },
    scopes: {
      minFollowers: {
        where: {
          numFollowers: {
            [Op.gte]: 100000
          }
        },
        order: [['numFollowers']]
      },
      getGroupsByGenre(genreName) {
        const {Album, Song, Genre} = require('../models')
        return {
          include: {
            model: Album,
            include: {
              model: Song,
              include: {
                model: Genre,
                where: {
                  name: genreName
                }
              }
            }
          }
        }
      }
    }
  });
  return Group;
};