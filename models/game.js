'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.User, {
        as: 'users',
        through: models.UserGame,
        foreignKey: 'gameId',
        otherKey: 'userId',
      });
    }
  }
  Game.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      title: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      description: {
        allowNull: false,
        type: DataTypes.TEXT,
      },
      play_count: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.INTEGER,
      },
      link: {
        allowNull: false,
        defaultValue: '',
        type: DataTypes.STRING,
      },
      image: {
        allowNull: false,
        defaultValue: '',
        type: DataTypes.STRING,
      },
    },
    {
      sequelize,
      modelName: 'Game',
      freezeTableName: true,
      tableName: 'games',
      timestamps: true,
    }
  );
  return Game;
};
