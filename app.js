const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
    res.writeHead(200, {"Content-Type":"text/html"});
    fs.createReadStream('index.html').pipe(res);
});

server.listen(3000);

console.log("html is running at http://127.0.0.1:3000");