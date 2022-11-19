const express = require (`express`);
const controller = require(`../controllers/controller.js`);

const app = express();

/*
    URL Path: `/api/services`
    Returns list of services as JSON
*/
app.get(`/services`, controller.getServices);

module.exports = app;