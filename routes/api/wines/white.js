const express = require('express');
const router = express.Router();
// const mongoose = require('mongoose');
// const passport = require('passport');

// Red Wine model
const WhiteWine = require('../../../models/WhiteWine').WhiteWine;
const WineScore = require('../../../util/WineScore').WineScore;
const SanitizeDescQuery = require('../../../util/SanitizeDescQuery').SanitizeDescQuery;

// @route   GET api/wines/white/test
// @desc    Test white wines rout
// @access  Public
router.get('/test', (req, res) => res.json({msg: 'This route works.'}));

// @route   GET api/wines/white
// @desc    Get all red wines
// @access  Public

router.get('/', (req, res) => {
  const errors = {};

  WhiteWine.find().lean().then(whiteWines => {
    if (!whiteWines.isEmpty) {
      res.json(whiteWines);
    } else {
      res.json({errorMsg: 'No wines found.'})
    }
  }).catch((err) => {
    console.error(err);
    res.status(404).json(errors);
  });
});

// @route   GET api/wines/white/guess
// @desc    Guess wine by descriptors
// @access  Public

router.get('/guess', (req, res) => {
  const queryValues = req.query;
  // Check if the query object is empty.
  if (Object.entries(queryValues).length === 0) {
    res.json({errorMsg: 'API request requires descriptor parameters.'});
    return;
  }
  WhiteWine.find().lean().then((whiteWines) => {
    const sanitizedQuery = SanitizeDescQuery(queryValues, false);
    if (Object.entries(sanitizedQuery).length === 0) {
      res.json({errorMsg: 'No descriptors were valid.'});
      return;
    }
    const wineRecordWithHighestScore = WineScore(sanitizedQuery, whiteWines);
    if (Object.entries(wineRecordWithHighestScore).length === 0) {
      res.json({errorMsg: 'No wines matched the descriptors.'});
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
  WhiteWine.findById(id).then((wine) => {
    res.json(wine);
  }).catch((err) => {
    if (err.name === 'CastError') {
      errors.nowine = 'A wine with that ID does not exist';
      res.status(404).json(errors);
    } else {
      res.status(404).json(err);
    }
  })
});

module.exports = router;
