const express = require ('express');
const routes = require (`./routes/routes.js`);

const app = express();
app.use('/', routes);
app.use (express.static('public'));

var server = app.listen(3000, function(){
    console.log("node running in port 3000. . . .");
});