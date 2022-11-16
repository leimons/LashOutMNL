const express = require (`express`);
const controller = require(`../controllers/controller.js`);

const app = express();

/*
    URL Path: `/api/categories`
    Returns list of categories as JSON
*/
app.get(`/categories`, controller.getCategories)

/*
    URL Path: `/api/services`
    Returns list of services as JSON
*/
app.get(`/services`, controller.getServices);

app.post(`/addAppointment`, controller.addAppointment);

module.exports = app;