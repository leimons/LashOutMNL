const express = require (`express`);
const controller = require(`../controllers/controller.js`);
const bcontroller = require(`../controllers/beautician-controller.js`);
const scontroller = require(`../controllers/service-admin.js`);
const pcontroller = require(`../controllers/promo-controller.js`);
const icontroller = require(`../controllers/inclusion-controller.js`);
const passcontroller = require(`../controllers/password-controller.js`);
const app = express();
const multer = require('multer')

const paymentUpload = multer({
    dest: './client/public/paymentImages'
})
/*
    URL Path: `/api/services`
    Returns list of services as JSON
*/

app.get(`/services/:category`, controller.getServices);
app.get(`/services`, controller.getServices);

app.post(`/addAppointment`, controller.addAppointment);

app.put(`/uploadPayment`, paymentUpload.single('file'), controller.uploadPayment);

app.get(`/getInclusions/:category`, controller.getInclusionsPage);

app.get('/getBeauticians/:Service', controller.getBeautician);

app.get(`/getOrderSummary`, controller.getOrderSummary);

app.get(`/getAppointment`, controller.getAppointments);

app.get(`/getAllAppointments`, controller.getAllAppointments);

app.get('/getAuthentication', controller.getAuthentication)
app.post(`/login`, controller.login);

app.post(`/addservice`, scontroller.sv_add);
app.post(`/deleteservice`, scontroller.sv_delete);
app.put(`/editservice`, scontroller.sv_edit);

app.post(`/addbeautician`, bcontroller.bea_add);
app.post(`/deletebeautician`, bcontroller.bea_delete);
app.put(`/editbeautician`, bcontroller.bea_edit);

app.post(`/addinclusion`, icontroller.i_add);
app.post(`/deleteinclusion`, icontroller.i_delete);
app.put(`/editinclusion`, icontroller.i_edit);


app.post(`/addpromo`, pcontroller.p_add);
app.post(`/deletepromo`, pcontroller.p_delete);
app.put(`/editpromo`, pcontroller.p_edit);

app.put(`/editpassword`, passcontroller.pass_edit);

module.exports = app;
