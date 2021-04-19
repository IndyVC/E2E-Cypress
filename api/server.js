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

function initApp(app) {
  app.use(cors());
  app.use(bodyParser.json());
  app.use(morgan("combined"));

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
  console.log(`listening on http://localhost:${HTTP_PORT}!`);
});
