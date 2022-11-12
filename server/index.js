const express = require(`express`);
const bodyParser = require(`body-parser`);
const apiRoutes = require (`./routes/routes.js`);

const db = require(`./database/models/db`);
const mongoose = require ('mongoose');
mongoose.connect('mongodb://localhost/LashOutMNL',
{useNewURLParser: true, useUnifiedTopology: true});

const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

// parse incoming requests with JSON payloads
app.use(express.json());

app.use (express.static('public'));
app.use(`/api`, apiRoutes);

const PORT = 3000;

app.listen(PORT, () => {
    console.log(`Node running in port ${PORT}. . . .`);
});