const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
// const passport = require('passport');

const redWines = require('./routes/api/wines/red');
const whiteWines = require('./routes/api/wines/white');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Define and connect to the MongoDB.
const db = require('./config/keys').mongoURI;
mongoose
    .connect(db, {useNewUrlParser: true})
    .then(() => console.log('MongoDB Connected'))
    .catch(err => console.error(err));

// Passport will be used later
// Passport middleware
// app.use(passport.initialize());
// Passport config
// require('./config/passport')(passport);

// Our routes
app.use('/api/wines/red', redWines);
app.use('/api/wines/white', whiteWines);

const ip = "127.0.0.1";
const port = 5000;

app.listen(port, ip, () => {
  console.log(`Server running... ${ip}:${port}`);
});
