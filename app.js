const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const passport = require('passport');

const app = express();

// Body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// TODO: Add database connection code.

// Passport will be used later
// Passport middleware
app.use(passport.initialize());
// Passport config
require('./config/passport')(passport);

// TODO: Setup routes

// When building on Cloud9 instance this value will change.
const ip = "172.31.17.32";
// Cloud9 env port is 8080
const port = process.env.PORT;

app.listen(port, ip, () => {
    console.log(`Server running... ${ip}:${port}`);
});
