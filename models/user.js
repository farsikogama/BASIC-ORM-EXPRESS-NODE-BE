'use strict';
const { Model } = require('sequelize');
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
require('dotenv').config();

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      this.belongsToMany(models.Game, {
        as: 'games',
        through: models.UserGame,
        foreignKey: 'userId',
        otherKey: 'gameId',
      });
    }
    // Method untuk melakukan enkripsi
    static #encrypt = (password) => bcrypt.hashSync(password, 10);

    // Method .compareSync digunakan untuk mencocokkan plaintext dengan hash.
    checkPassword = (password) => bcrypt.compareSync(password, this.password);

    // Generate token jwt
    generateToken = () => {
      const payload = {
        id: this.id,
      };

      // Membuat token
      const token = jwt.sign(payload, process.env.jwtSecret);
      return token;
    };

    static register = async ({ name, username, email, password }) => {
      try {
        const encryptedPassword = this.#encrypt(password);

        const user = await this.findOne({ where: { email } });

        if (user) {
          return Promise.reject('email sudah digunakan');
        } else {
          return this.create({
            name,
            username,
            email,
            password: encryptedPassword,
          });
        }
      } catch (error) {
        return Promise.reject(err);
      }
    };

    static authenticate = async ({ email, password }) => {
      try {
        const user = await this.findOne({ where: { email } });
        if (!user) return Promise.reject('User tidak ditemukan!');
        //
        const isPasswordValid = user.checkPassword(password);
        if (!isPasswordValid) return Promise.reject('Password salah!');
        //
        return Promise.resolve(user);
      } catch (err) {
        return Promise.reject(err);
      }
    };
  }
  User.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: DataTypes.INTEGER,
      },
      name: {
        allowNull: false,
        defaultValue: '',
        type: DataTypes.STRING,
      },
      username: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      email: {
        allowNull: false,
        unique: true,
        type: DataTypes.STRING,
      },
      password: {
        allowNull: false,
        type: DataTypes.STRING,
      },
      avatar: {
        allowNull: false,
        defaultValue: '',
        type: DataTypes.STRING,
      },
      score: {
        allowNull: false,
        defaultValue: 0,
        type: DataTypes.INTEGER,
      },
      address: {
        allowNull: false,
        defaultValue: '',
        type: DataTypes.STRING,
      },
      birthdate: {
        allowNull: true,
        type: DataTypes.DATEONLY,
      },
    },
    {
      sequelize,
      modelName: 'User',
      freezeTableName: true,
      tableName: 'users',
      timestamps: true,
    }
  );
  return User;
};
