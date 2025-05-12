const path = require("path");

const express = require("express");
const bodyParser = require("body-parser");

// Models Product and users

const Product = require("./models/product");
const User = require("./models/user");
const Cart = require("./models/cart");
const CartItem = require("./models/cart-item");
const Order = require("./models/order");
const OrderItem = require("./models/order-items");

const errorController = require("./controllers/error");
const db = require("./util/database");
const app = express();

app.set("view engine", "ejs");
app.set("views", "views");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "public")));
app.use((req, res, next) => {
	User.findByPk(1).then(user => {
		req.user = user; // stores sequlise object
		next();
	});
})

app.use("/admin", adminRoutes);
app.use(shopRoutes);

app.use(errorController.get404);

Product.belongsTo(User, {
	constraint: true,
	onDelete: 'CASCADE',
})

User.hasMany(Product);
User.hasOne(Cart);
User.hasMany(Order);

Order.belongsTo(User);
Order.belongsToMany(Product, { through: OrderItem });
Product.belongsToMany(Order, { through: OrderItem });
Cart.belongsTo(User);
Cart.belongsToMany(Product, { through: CartItem });
Product.belongsToMany(Cart, { through: CartItem });

db.sync().then(() => {
	User.findByPk(1).then(result => {
		if (!result) {
			return User.create({ name: "Tuedon", email: "tuedon@gmail.com" });
		}
		return result;
	}).then((user) => {
		return user.createCart();
	})
		.then(() => {
			app.listen(3000);
		})

}).catch(err => console.log(err));
