const http = require("http");
const fs = require("fs");
const port = process.env.PORT || 3000;

const server = http.createServer(function (req, res) {
  console.log("request was made: " + req.url);
  res.writeHead(200, { "Content-Type": "text/html" });
  var template = fs.readFileSync("./index.html", "utf8");
  res.end(template);
});

server.listen(port, function () {
  console.log("Server listening on port: " + port);
});
