const express = require(`express`);
const bodyParser = require(`body-parser`);
const apiRoutes = require (`./routes/routes.js`);
const cors = require('cors');
const cookieParser = require('cookie-parser')
const session = require ('express-session');
const MongoStore = require ('connect-mongo');

const db = require(`./database/models/db`);
const mongoose = require ('mongoose');
const uri = 'mongodb+srv://LashOutMNL:wDM3UxgWkRj5qgaK@lashoutmnl.fq52ce8.mongodb.net/?retryWrites=true&w=majority'
mongoose.connect(uri,
{useNewURLParser: true, useUnifiedTopology: true});



const app = express();
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(cors({
    origin: '*',
    methods: ['GET', 'POST', 'PUT', 'DELETE'],
    allowedHeaders: '*'
}))

app.use(session({
    secret: 'someBigSecret',
    resave: false,
    saveUninitialized: false,
    store: MongoStore.create({
        mongoUrl: uri,
        dbName: 'Test-Sessions'
    }),
    cookie: {
        secure: true, 
        maxAge: 60 * 60 * 100,
        httpOnly: true,
        domain: 'http://localhost:3000'
    }
}))

// parse incoming requests with JSON payloads
app.use(express.json());

app.use (express.static('public'));
app.use(`/api`, apiRoutes);

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
    console.log(`  Server running at port ${PORT}...`);
    console.log(`  - Local:   http://localhost:${PORT}/ `);
});