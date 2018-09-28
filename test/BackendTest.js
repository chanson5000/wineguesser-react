const assert = require('assert');
const RedWine = require('../models/RedWine').RedWine;
const SanitizeDescriptorQueryObject = require('../util/SanitizeDescQuery').SanitizeDescQuery;
const WineScore = require('../util/WineScore').WineScore;

describe('SanitizeDescQuery', function () {
  it('should equal array of key value pairs without invalid pair', function () {
    const expected = [['colorRuby', 1], ['colorPurple', 1]];
    const input = {colorRuby: 1, colorPurple: 1, notValid: 1};

    const actual = SanitizeDescriptorQueryObject(input, true);

    assert.deepStrictEqual(actual, expected);
  });
});

describe('WineScore', function () {
  it('should equal object of highest score with score in object', function () {
    const expected = {
      score: 4,
      descriptors: {
        colorRuby: 1,
        colorPurple: 1,
        fruitRed: 1,
        fruitBlack: 1,
        fruitBlue: 1,
        characterRipe: 1
      }
    };

    const descriptorValues = [
      ['colorRuby', 1],
      ['colorPurple', 1],
      ['fruitRed', 1],
      ['fruitBlack', 1]
    ];

    const wineData = [
      {
        descriptors: {
          colorRuby: 1,
          colorPurple: 1,
          fruitRed: 1,
          fruitBlack: 1,
          fruitBlue: 1,
          characterRipe: 1
        }
      },
      {
        descriptors: {
          fruitRed: 1,
          fruitBlack: 1,
          fruitBlue: 1,
          characterRipe: 1
        }
      }
    ];

    const actual = WineScore(descriptorValues, wineData);

    assert.deepStrictEqual(actual, expected);
  })
});