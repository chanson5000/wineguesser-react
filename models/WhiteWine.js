const mongoose = require('mongoose');

const WhiteWineSchema = new mongoose.Schema({
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

    // This is the structure of our descriptors unique to white wines.
    // They are number based, where:
    // 0 = Not a common descriptor of the wine
    // 1 = Is a descriptor of a wine.
    // 3 = Is a descriptor and a key indicator of a wine.
    descriptors: {
        straw: {
            type: Number,
            default: 0
        },
        yellow: {
            type: Number,
            default: 0
        },
        gold: {
            type: Number,
            default: 0
        },
        apple: {
            type: Number,
            default: 0
        },
        citrus: {
            type: Number,
            default: 0
        },
        stone: {
            type: Number,
            default: 0
        },
        tropical: {
            type: Number,
            default: 0
        },
        noseTart: {
            type: Number,
            default: 0
        },
        noseRipe: {
            type: Number,
            default: 0
        },
        noseOverripe: {
            type: Number,
            default: 0
        },
        noseBaked: {
            type: Number,
            default: 0
        },
        floralFruitBlossoms: {
            type: Number,
            default: 0
        },
        floralRedFlowers: {
            type: Number,
            default: 0
        },
        floralLightFlowers: {
            type: Number,
            default: 0
        },
        herbalLemongrass: {
            type: Number,
            default: 0
        },
        herbalDry: {
            type: Number,
            default: 0
        },
        herbalSageMint: {
            type: Number,
            default: 0
        },
        herbalTea: {
            type: Number,
            default: 0
        },
        vegetalPyrazine: {
            type: Number,
            default: 0
        },
        spice: {
            type: Number,
            default: 0
        },
        terpene: {
            type: Number,
            default: 0
        },
        wax: {
            type: Number,
            default: 0
        },
        soap: {
            type: Number,
            default: 0
        },
        oysterShell: {
            type: Number,
            default: 0
        },
        botrytis: {
            type: Number,
            default: 0
        },
        oxidative: {
            type: Number,
            default: 0
        },
        lees: {
            type: Number,
            default: 0
        },
        buttery: {
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
        bitter: {
            type: Number,
            default: 0
        },
        dry: {
            type: Number,
            default: 0
        },
        offDry: {
            type: Number,
            default: 0
        },
        sweet: {
            type: Number,
            default: 0
        },
        acidLow: {
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
            type: Number
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

// Export this model.
module.exports = mongoose.model('WhiteWine', WhiteWineSchema);