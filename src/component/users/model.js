const sequelize = require('../../startup/database')
const Sqlz = require('sequelize')
const User = sequelize.define("users", {
    fullname: {
      type: Sqlz.STRING,
      allowNull: false
    },
    email: {
      type: Sqlz.STRING,
      allowNull: false
    },
    password: {
      type: Sqlz.STRING,
    },
    address: {
      type: Sqlz.STRING,
    }
 });
 

 module.exports = User