const express = require('express');

// Server

// Routes
const rootRoute = require("./routes");
const usersRoute = require("./routes/users")

const app = express();

app.use(usersRoute);
app.use(rootRoute);

app.listen(3000);
