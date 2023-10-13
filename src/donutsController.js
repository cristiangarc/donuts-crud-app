const { nanoid } = require("nanoid");
const donutPrices = require('../data/donutPrices.json');

const create = (name) => {
    return {
        name: name,
        priceInCents: donutPrices[name] || 100,
        id: nanoid(4),
        inStock: true
    }
}