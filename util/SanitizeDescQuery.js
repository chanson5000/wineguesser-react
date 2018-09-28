const RedWine = require('../models/RedWine').RedWine;
const WhiteWine = require('../models/WhiteWine').WhiteWine;

// Takes in an object of descriptors from a query.
const SanitizeDescQuery = (query, isRed = false) => {
  if (!(query instanceof Object)) {
    return null;
  }

  let descriptors;
  // Convert our descriptors model to an array of descriptor keys.
  if (isRed) {
    descriptors = Object.keys(new RedWine().descriptors);
  } else {
    descriptors = Object.keys(new WhiteWine().descriptors);
  }

  // Returns validated array of descriptors.
  return Object.entries(query).filter((queryEntry) => {
    return queryEntry;
  }).filter((entry) => {
    return descriptors.includes(entry[0]);
  });
};

module.exports.SanitizeDescQuery = SanitizeDescQuery;