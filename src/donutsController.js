const { nanoid } = require("nanoid");
const donutPrices = require('../data/donutPrices.json');

const create = (donuts, name = '') => {
    const newDonut = {
        name: name,
        priceInCents: donutPrices[name] || 100,
        id: nanoid(4),
        inStock: true
    }
    donuts.push(newDonut);
    return donuts;
}

module.exports = {
    create,
}