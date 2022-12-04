const express = require (`express`);
const controller = require(`../controllers/controller.js`);
const bcontroller = require(`../controllers/beautician-controller.js`);
const scontroller = require(`../controllers/service-admin.js`);
const icontroller = require(`../controllers/inclusions-controller.js`);
const app = express();

/*
    URL Path: `/api/services`
    Returns list of services as JSON
*/
app.get(`/services/:category`, controller.getServices);
app.get(`/services`, controller.getServices);

app.post(`/addAppointment`, controller.addAppointment);

app.get(`/getInclusions`, controller.getInclusionsPage);

app.post(`/addInclusions`, controller.addInclusions);

app.post(`/addChosenDate`, controller.addChosenDate);

app.post(`/addClientDetails`, controller.addClientDetails);

app.get(`/getOrderSummary`, controller.getOrderSummary);

app.get(`/getAppointment`, controller.getAppointments);

app.get(`/getAllAppointments`, controller.getAllAppointments);

app.get(`/login`, controller.login);

app.post(`/addservice`, scontoller.sv_add);
app.post(`/deleteservice`, scontoller.sv_delete);
app.post(`/editservice`, scontoller.sv_edit);

app.post(`/addbeautician`, bcontroller.bea_add);
app.post(`/deletebeautician`, bcontroller.bea_delete);
app.post(`/editbeautician`, bcontroller.bea_schedule_change);

app.post(`/addinclusion`, icontroller.i_add);
app.post(`/deleteinclusion`, icontroller.i_delete);
app.post(`/editinclusion`, icontroller.i_edit);

module.exports = app;
