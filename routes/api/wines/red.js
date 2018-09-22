const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const passport = require('passport');

// Red Wine model
const RedWine = require('../../../models/RedWine').RedWine;

// @route   GET api/wines/red/test
// @desc    Test red wines route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "This route works."}));

// @route   GET api/wines/red
// @desc    Get all red wines
// @access  Public

router.get('/', (req, res) => {
    const errors = {};

    RedWine.find({})
        .then(redWines => {
            if (!redWines) {
                errors.nowinesfound = 'No Wines Found.';
            } else {
                res.json(redWines);
            }
        })
        .catch((err) => {
            console.error(err);
            res.status(404).json(err);
        });
});

// @rout    GET api/wines/red/:id
// @desc    Get wines by ID
// @access  Public

router.get('/:id', (req, res) => {
    const errors = {};
    const id = req.params.id;
    RedWine.findById(id)
        .then(wine => {
            res.json(wine);
        })
        .catch((err) => {
            if (err.varietal === 'CastError') {
                errors.nowine = 'A wine with that ID does not exist';
                res.status(404).json(errors);
            }
            else {
                res.status(404).json(err);
            }
        });
});

module.exports = router;
