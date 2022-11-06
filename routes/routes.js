const express = require (`express`);
const controller = require(`../controllers/controller.js`);

const app = express();

app.get(`/`, controller.getHomePage);
app.get(`/services`, controller.getServicesPage);

module.exports = app;