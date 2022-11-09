const express = require ('express');
const hbs = require (`hbs`);
const bodyParser = require(`body-parser`);
const routes = require (`./routes/routes.js`);
const db = require(`./database/models/db`);
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/LashOutMNL',
{useNewURLParser: true, useUnifiedTopology: true});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set(`view engine`, `hbs`);
hbs.registerPartials(__dirname + `/views/partials`);

app.use (express.static(__dirname + '/public'));
app.use('/', routes);

hbs.registerHelper('ifCategory', function (a, b, options){
    if (a == b) {return options.fn(this); }
    return options.inverse(this);
});

var server = app.listen(3000, function(){
    console.log("node running in port 3000. . . .");
});