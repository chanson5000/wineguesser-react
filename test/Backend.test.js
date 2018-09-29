const assert = require('assert');
const RedWine = require('../models/RedWine').RedWine;
const SanitizeDescriptorQueryObject = require('../util/SanitizeDescQuery').SanitizeDescQuery;
const WineScore = require('../util/WineScore').WineScore;

describe('SanitizeDescQuery when given valid descriptors', () => {
  it('should equal array of key value pairs without invalid pair', () => {
    const expected = [['colorRuby', 1], ['colorPurple', 1]];
    const input = {colorRuby: 1, colorPurple: 1, notValid: 1};

    const actual = SanitizeDescriptorQueryObject(input, true);

    assert.deepStrictEqual(actual, expected);
  });
});

describe('SanitizeDescQuery when given no valid descriptors', () => {
  it('should return empty array', () => {
    const expected = [];
    const input = {notValid: ''};

    const actual = SanitizeDescriptorQueryObject(input, true);

    assert.deepStrictEqual(actual, expected);
  })
});

describe('SanitizeDescQuery when given non-Object', () => {
  it('should return null', () => {
    const expected = null;
    const input = 1;

    const actual = SanitizeDescriptorQueryObject(input, true);

    assert.deepStrictEqual(actual, expected);
  })
});

describe('WineScore', () => {
  it('should equal object of highest score with score in object', () => {
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