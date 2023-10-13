const { nanoid } = require("nanoid");
const donutPrices = require('../data/donutPrices.json');
const inform = console.log;

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

const index = (donuts) => {
    return donuts.map((donut) => donut.id + ' ' + donut.name + ' ' + donut.priceInCents);
}

module.exports = {
    create, index
}