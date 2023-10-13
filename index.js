const express = require("express");
const controller = require("./controller/index");
const cors = require("cors");
const server = express();
const apiRouter = express.Router();
const appRouter = express.Router();

apiRouter.get("/food", cors(), controller.getAllFood);
apiRouter.get("/", (req, res) => {
  res.send("Hello World!");
});
server.get("/oi", (req, res) => {
  res.send("Hello World!");
});
appRouter.use(apiRouter);
server.use(express.json());
server.use(cors());
server.use(appRouter);



server.listen(8080, () => {
  console.log(`Listening on http://localhost:8080`);
});
