const express = require (`express`);
const controller = require(`../controllers/controller.js`);

const app = express();

/*
    URL Path: `/api/services`
    Returns list of services as JSON
*/
app.get(`/services/:category`, controller.getServices);

app.post(`/addAppointment`, controller.addAppointment);

app.post(`/addInclusions`, controller.addInclusions);

app.post(`/addClientDetails`, controller.addClientDetails);

module.exports = app;