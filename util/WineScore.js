const WineScore = (descriptorValues, wineData) => {
  const descriptors = descriptorValues.map((descriptorValues) => descriptorValues[0]);

  // Populating scores for matching descriptor values based on the provided 'wineData'.
  const wineDataScores = wineData.map((entry) => {
    // Calculate score by added values of descriptors filtered by what is included in
    // 'descriptorValues'.
    entry.score = Object.entries(entry.descriptors).filter((descriptorEntry) => {
      return descriptors.includes(descriptorEntry[0]);
    }).reduce((topScore, nextScore, index) => {
      // Mutating the list of descriptors to a single score value.
      if (index === 1) {
        return parseInt(topScore[1]) + parseInt(nextScore[1]);
      } else {
        return topScore + parseInt(nextScore[1]);
      }
    });

    // Returning the entry from 'wineData' with the score added.
    return entry;
  });

  // The highest score is returned as being the wine that matches the most descriptors.
  return wineDataScores.reduce((max, nextValue) => max.score > nextValue.score ? max : nextValue);
};

module.exports.WineScore = WineScore;