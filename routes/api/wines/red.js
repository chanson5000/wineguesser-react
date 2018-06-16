const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
const passport = require('passport');

// Red Wine model
const RedWine = require('../../../models/RedWine');

// @route   GET api/wines/red
// @desc    Get all red wines
// @access  Public

router.get('/', (req, res) => {
    const errors = {};

   RedWine.find()
       .then(wines => res.json(wines))
       .catch((err) => {
           console.err(err);
           errors.nowinesfound = 'No Wines Found.';
           res.status(404).json(errors);
       });
});
