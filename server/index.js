const express = require(`express`);
const bodyParser = require(`body-parser`);
const apiRoutes = require (`./routes/routes.js`);
const cors = require('cors');
const session = require ('express-session');
const MongoStore = require ('connect-mongo')

const db = require(`./database/models/db`);
const mongoose = require ('mongoose');
const uri = 'mongodb+srv://LashOutMNL:wDM3UxgWkRj5qgaK@lashoutmnl.fq52ce8.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri,
{useNewURLParser: true, useUnifiedTopology: true});


const app = express();
app.use(bodyParser.urlencoded({ extended: false }));

app.use(session({
    secret: 'someBigSecret',
    store: MongoStore.create({
        mongoUrl: uri
    }),
    resave: false,
    saveUninitialized: true,
    cookie: {secure: false, maxAge: 1000 * 60 * 60 * 24 * 7}
}))

// parse incoming requests with JSON payloads
app.use(express.json());
app.use(cors());

app.use (express.static('public'));
app.use(`/api`, apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`  Server running at port ${PORT}...`);
    console.log(`  - Local:   http://localhost:${PORT}/ `);
});