const http = require("http");

function route(req, res) {
  console.log(`new petition`);
  console.log(req.url);

  switch (req.url) {
    case "/hello":
      res.write("Hello, how are you?");
      res.end();
      break;

    default:
      res.write("Invalid URL");
      res.end();
      break;
  }
}

http.createServer(route).listen(3000);

console.log(`Server is running on port 3000`);
