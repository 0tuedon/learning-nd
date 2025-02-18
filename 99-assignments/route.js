
function requestHandlers(req, res) {
	if (req.method === "GET") {
		if (req.url === "/") {
			res.setHeader("Content-Type", "text/html");
			res.write("<html>");
			res.write("<body>")
			res.write("<p>Halo, Welcome Home </p>");
			res.write("<form action='/create-user' method='POST'> <input type='text' name='username' /> <button type='submit'>Send </button> </form>");
			res.write("</body>")
			res.write("</html>")
			return res.end();
		}
		else if (req.url === "users") {
			res.write("<html>");
			res.write("<body>")
			res.setHeader("Content-Type", "text/html");
			res.write("<ul> <li> Tuedon </li> <li> Hunger </li> </ul>");
			res.write("</body>")
			res.write("</html>")
			return res.end();
		}
	}
	else {
		if (req.url === "/create-user") {
			let streamData = [];
			req.on('data', (chunk) => {
				streamData.push(chunk);
			})

			req.on('end', () => {
				let body = Buffer.concat(streamData).toString();
				console.log(body);
				res.statusCode = 301;
				res.setHeader('Location', '/');
				res.end();
			})
		}
	}

}

module.exports = requestHandlers;

