const express = require (`express`);
const controller = require(`../controllers/controller.js`);

const app = express();

app.get(`/`, controller.getHomePage);
app.get(`/services`, controller.getServicesPage);
app.get(`/inclusions`, controller.getInclusionsPage);

module.exports = app;