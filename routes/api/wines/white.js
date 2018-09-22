const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const passport = require('passport');

// Red Wine model
const WhiteWine = require('../../../models/WhiteWine').WhiteWine;

// @route   GET api/wines/white/test
// @desc    Test white wines rout
// @access  Public
router.get('/test', (req, res) => res.json({msg: "This route works."}));

// @route   GET api/wines/red
// @desc    Get all red wines
// @access  Public
router.get('/', (req, res) => {
    const errors = {};

    WhiteWine.find()
        .then(wines => res.json(wines))
        .catch((err) => {
            console.error(err);
            errors.nowinesfound = 'No Wines Found.';
            res.status(404).json(errors);
        });
});

module.exports = router;