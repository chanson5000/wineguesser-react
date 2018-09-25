const mongoose = require('mongoose');

const RedWineSchema = new mongoose.Schema({
  // These fields are applicable to red and white wines.
  varietal: {
    type: String,
    required: true
  },
  isNewWorld: {
    type: Boolean,
    default: false
  },
  description: String,
  notes: String,
  commonConfusion: String,

  // This is the structure of our descriptors unique to red wines.
  // They are number based, where:
  // 0 = Not a common descriptor of the wine
  // 1 = Is a descriptor of a wine.
  // 2 = Is a descriptor and a key indicator of a wine.
  descriptors: {
    colorGarnet: {
      type: Number,
      default: 0
    },
    colorRuby: {
      type: Number,
      default: 0
    },
    colorPurple: {
      type: Number,
      default: 0
    },
    fruitRed: {
      type: Number,
      default: 0
    },
    fruitBlack: {
      type: Number,
      default: 0
    },
    fruitBlue: {
      type: Number,
      default: 0
    },
    characterTart: {
      type: Number,
      default: 0
    },
    characterRipe: {
      type: Number,
      default: 0
    },
    characterOverripe: {
      type: Number,
      default: 0
    },
    characterBaked: {
      type: Number,
      default: 0
    },
    floral: {
      type: Number,
      default: 0
    },
    vegetalPyrazine: {
      type: Number,
      default: 0
    },
    vegetalTomatoLeaf: {
      type: Number,
      default: 0
    },
    herbalTobacco: {
      type: Number,
      default: 0
    },
    herbalMint: {
      type: Number,
      default: 0
    },
    herbalThymeRosemary: {
      type: Number,
      default: 0
    },
    herbalTea: {
      type: Number,
      default: 0
    },
    herbalOreganoBasil: {
      type: Number,
      default: 0
    },
    herbalDried: {
      type: Number,
      default: 0
    },
    spicePepper: {
      type: Number,
      default: 0
    },
    spiceAnise: {
      type: Number,
      default: 0
    },
    spiceOther: {
      type: Number,
      default: 0
    },
    coffee: {
      type: Number,
      default: 0
    },
    cocoa: {
      type: Number,
      default: 0
    },
    game: {
      type: Number,
      default: 0
    },
    smoke: {
      type: Number,
      default: 0
    },
    balsamic: {
      type: Number,
      default: 0
    },
    carbonicMaceration: {
      type: Number,
      default: 0
    },
    volatileOxidation: {
      type: Number,
      default: 0
    },
    organic: {
      type: Number,
      default: 0
    },
    inorganic: {
      type: Number,
      default: 0
    },
    oak: {
      type: Number,
      default: 0
    },
    tanninLow: {
      type: Number,
      default: 0
    },
    tanninMod: {
      type: Number,
      default: 0
    },
    tanninModPlus: {
      type: Number,
      default: 0
    },
    tanninHigh: {
      type: Number,
      default: 0
    },
    acidLow: {
      type: Number,
      default: 0
    },
    acidMod: {
      type: Number,
      default: 0
    },
    acidModPlus: {
      type: Number,
      default: 0
    },
    acidHigh: {
      type: Number,
      default: 0
    },
    alcoholLow: {
      type: Number,
      default: 0
    },
    alcoholMod: {
      type: Number,
      default: 0
    },
    alcoholModPlus: {
      type: Number,
      default: 0
    },
    alcoholHigh: {
      type: Number,
      default: 0
    },
    climateCool: {
      type: Number,
      default: 0
    },
    climateModerate: {
      type: Number,
      default: 0
    },
    climateWarm: {
      type: Number,
      default: 0
    }
  }
});

module.exports.RedWine = mongoose.model("RedForm", RedWineSchema);
