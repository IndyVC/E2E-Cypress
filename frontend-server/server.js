const express = require("express");
const http = require("http");
const path = require("path");
const morgan = require("morgan");

const app = express();

const port = process.env.PORT || 3001;
const distPath = "../frontend/dist/bond-villains";
app.use(morgan("combined"));
app.use(express.static(path.join(__dirname, distPath)));

app.get("/*", function (req, res) {
  // res.send('Hello World');
  res.sendFile(path.join(__dirname, distPath, "index.html"));
});

const server = http.createServer(app);

server.listen(port, () =>
  console.log(
    `Bond-villains frontend server running on: http://localhost:${port}`
  )
);
