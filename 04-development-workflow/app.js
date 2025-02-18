const http = require("http");
const routeHandler = require("./route");

const server = http.createServer((req, res) => {
	routeHandler(req, res);
})


server.listen(3000);

