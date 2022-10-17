const express = require (`express`);
const controller = require("../controllers/controller");
const app = express();

app.get('/', controller.getHomePage);

module.exports = app;