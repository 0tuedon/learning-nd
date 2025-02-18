const fs = require("fs");

function routeHandler(req, res) {
	if (req.method === "GET") {
		if (req.url === "/") {
			res.setHeader('Content-Type', 'text/html'); // to set the type;
			res.write("<html>");
			res.write("<head> <title> Enter Message </title> </head>");
			res.write('<body> <form action="/message" method="POST"> <input name="message" type="text" /> <button type="submit">SEND </button> </form> </body>')
			res.write("</html>");
			return res.end();

		}
		res.setHeader('Content-Type', 'text/html'); // to set the type;
		res.write("<html>");

		res.write("<head> <title> Tuedon is a Boy </title> </head>");
		res.write("<body> Help Tureedon <body/>")
		res.write("</html>");
		res.end();
	}
	else {
		if (req.url === "/message") {
			const body = [];
			let result;
			req.on("data", (chunk) => {
				body.push(chunk);
			})
			return req.on("end", () => {
				const parsedBody = Buffer.concat(body).toString();
				result = parsedBody.split("=")[1];
				fs.writeFile("message.txt", result, (err) => {
					res.statusCode = 302;
					res.setHeader("Location", "/")
					return res.end()
				});
			})
		}
		res.setHeader('Content-Type', 'text/html'); // to set the type;
		res.write("<html>");

		res.write("<head> <title> Tuedon is a Boy </title> </head>");
		res.write("<body> Help Tuedon <body/>")
		res.write("</html>");
		res.end();

	}

}

module.exports = routeHandler;
