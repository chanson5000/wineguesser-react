const express = require('express');
const router = express.Router();
const mongoose = require('mongoose');
// const passport = require('passport');

// Red Wine model
const RedWine = require('../../../models/RedWine').RedWine;
const WineScore = require('../../../util/WineScore').WineScore;
const SanitizeDescQuery = require('../../../util/SanitizeDescQuery').SanitizeDescQuery;

// @route   GET api/wines/red/test
// @desc    Test red wines route
// @access  Public
router.get('/test', (req, res) => res.json({msg: "This route works."}));

// @route   GET api/wines/red
// @desc    Get all red wines
// @access  Public

router.get('/', (req, res) => {
  const errors = {};

  RedWine.find().then((redWines) => {
    if (!redWines.isEmpty) {
      res.json(redWines);
    } else {
      errors.nowinesfound = 'No Wines Found.';
      res.json(errors);
    }
  }).catch((err) => {
    console.error(err);
    res.status(404).json(err);
  });
});

// @route   GET api/wines/red/guess
// @desc    Guess wine by descriptors
// @access  Public

router.get('/guess', (req, res) => {
  const queryValues = req.query;
  // Check if the query object is empty.
  if (Object.entries(queryValues).length === 0) {
    res.json({errorMsg: "API request requires descriptor parameters."});
    return;
  }
  RedWine.find().lean().then((redWines) => {
    const sanitizedQuery = SanitizeDescQuery(queryValues, true);
    if (Object.entries(sanitizedQuery).length === 0) {
      res.json({errorMsg: "No descriptors were valid."});
      return;
    }
    const wineRecordWithHighestScore = WineScore(sanitizedQuery, redWines);
    if (Object.entries(wineRecordWithHighestScore).length === 0) {
      res.json({errorMsg: "No wines matched the descriptors."});
    } else {
      res.json(wineRecordWithHighestScore);
    }
  }).catch((err) => {
    res.status(404).json(err);
  })
});

// @route   GET api/wines/red/:id
// @desc    Get wines by ID
// @access  Public

router.get('/:id', (req, res) => {
  const errors = {};
  const id = req.params.id;
  RedWine.findById(id).then(wine => {
    res.json(wine);
  }).catch((err) => {
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
