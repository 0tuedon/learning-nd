const http = require("http");
const requestHandlers = require("./route");

const server = http.createServer((req, res) => {
	requestHandlers(req, res)
})


server.listen(3000);
