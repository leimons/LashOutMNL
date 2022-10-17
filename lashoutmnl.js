const express = require ('express');
const hbs = require (`hbs`);
const bodyParser = require(`body-parser`);
const routes = require (`./routes/routes.js`);

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.set(`view engine`, `hbs`);
hbs.registerPartials(__dirname + `/views/partials`);

app.use (express.static('public'));
app.use('/', routes);

var server = app.listen(3000, function(){
    console.log("node running in port 3000. . . .");
});