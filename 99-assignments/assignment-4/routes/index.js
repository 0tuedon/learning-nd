const express = require("express");

const router = express.Router();

const users = ["tueddy"];

router.get("/", (req, res) => {
	res.render("root", { layout: false });
});

router.get("/users", (req, res) => {
	res.render("users", { layout: false, users });
})

router.post("/add-user", (req, res) => {
	users.push(req.body.username);
	res.redirect("/users")
})

module.exports = { router, users };
