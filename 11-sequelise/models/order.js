const Sequlize = require("sequelize");

const sequelize = require("../util/database");

const Order = sequelize.define("order", {
	id: {
		type: Sequlize.INTEGER,
		autoIncrement: true,
		notNull: false,
		primaryKey: true,
	}
});


module.exports = Order;
