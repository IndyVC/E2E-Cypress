const http = require("http");
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const morgan = require("morgan");
const HTTP_PORT = 4300;
const fs = require("fs");
const path = require("path");

const app = express();

let villains = [];
let users = [
  { userName: "neal", fullName: "Neal Armstrong" },
  { userName: "jdoe", fullName: "John Doe" },
];

function initApp(app) {
  app.use(cors());
  app.use(bodyParser.json());
  if (
    process.argv.indexOf("--verbose") !== -1 ||
    process.argv.indexOf("-v") !== -1
  ) {
    app.use(morgan("combined"));
  }

  app.use(function (err, req, res, next) {
    res.status(err.status || 500);
    res.render("error", {
      message: err.message,
      error: err,
    });
  });

  function getHandler(res) {
    res.send(JSON.stringify(villains));
  }

  app.get("/api/:delay", function (req, res) {
    const delay = req.params.delay;
    if (delay) {
      setTimeout(() => getHandler(res), delay);
    } else {
      getHandler(res);
    }
  });

  function postHandler(req, res) {
    villains.push(req.body);
    res.send(`"OK added villain '${req.body.villain}'"`);
  }

  app.post("/api/:delay", function (req, res) {
    const delay = req.params.delay;
    if (delay) {
      setTimeout(() => postHandler(req, res), delay);
    } else {
      postHandler(req, res);
    }
  });

  app.delete("/api", function (req, res) {
    initVillains();
    res.send("OK");
  });

  app.get("/user/:username", function (req, res) {
    let user = users.find((user) => user.userName === req.params.username);
    if (user) {
      res.send(user);
    } else {
      res.status(404);
      res.send("Unknown user");
    }
  });
}

function initVillains() {
  const rawdata = fs.readFileSync(
    path.join(__dirname, "www", "villain.data.json")
  );
  villains = JSON.parse(rawdata);
}

initVillains();
initApp(app);
let httpServer = http.createServer(app);
httpServer.listen(HTTP_PORT, () => {
  console.log(`API listening on http://localhost:${HTTP_PORT}!`);
  console.log(`start with -v flag for logging`);
});
