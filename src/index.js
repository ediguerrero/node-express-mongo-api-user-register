const http = require("http");
const url = require("url");
const querystring = require("querystring");
const { countries } = require("countries-list");

var server = http.createServer((request, response) => {
  var parced = url.parse(request.url);
  var query = querystring.parse(parced.query);
  console.log("query", query);
  console.log("parced", parced);
  const pathname = parced.pathname;
  if (pathname === "/country") {
    response.writeHead(200, { "Content-Type": "application/json" });
    response.write(JSON.stringify(countries[query.code]));
    response.end();
  } else {
    response.writeHead(404, { "Content-Type": "application/json" });
    response.write(JSON.stringify({ error: "url not found" }));
    response.end();
  }
});

server.listen(4000);
console.log("server running at 4000");
