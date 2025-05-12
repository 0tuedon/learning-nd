const Sequelise = require("sequelize");

const sequelize = require("../util/database");

const User = sequelize.define("user", {
  id: {
    type: Sequelise.INTEGER,
    autoIncrement: true,
    allowNull: true,
    primaryKey: true,
  },
  email: Sequelise.STRING,
  name: Sequelise.STRING,
});
module.exports = User;
