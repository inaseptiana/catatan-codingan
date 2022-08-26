const http = require("http");

http
  .createServer((req, res) => {
    res.writeHead(201, {});
    res.write("hello skilvul");
    res.end();
  })
  .listen(8080);
