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

  function postHandler(req, res, next) {
    if (req.body.movie.indexOf("Austin Powers") !== -1) {
      var err = new Error("Austin Powers is not allowed!");
      err.status = 400;
      return next(err);
    }
    villains.push(req.body);
    res.send(`"OK added villain '${req.body.villain}'"`);
  }

  app.post("/api/:delay", function (req, res, next) {
    const delay = req.params.delay;
    if (delay) {
      setTimeout(() => postHandler(req, res, next), delay);
    } else {
      postHandler(req, res, next);
    }
  });

  app.delete("/api", function (req, res) {
    initVillains();
    res.send("OK");
  });

  app.get("/user/:username", function (req, res, next) {
    let user = users.find((user) => user.userName === req.params.username);
    if (user) {
      res.send(user);
    } else {
      var err = new Error("Unknown user");
      err.status = 404;
      return next(err);
    }
  });


  app.use(function (err, req, res, next) {
    res.status(err.status || 500).json({ status: err.status, message: err.message });
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
