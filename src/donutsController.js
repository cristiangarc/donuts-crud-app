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
    return donuts.map((donut) => donut.id + ' ' + donut.name + ' ' + donut.priceInCents + ' ' + donut.inStock);
}

const edit = (donuts, id, name) => {
    const index = donuts.findIndex((dn) => dn.id == id);
    if (index > -1) {
        const donut = donuts[index];
        donut.name = name;
        donut.priceInCents = donutPrices[name];
        donut.inStock = true;
        inform('Donut successfully updated');
        return donuts;
    } else {
        inform('Donut not found. No action taken');
        return donuts;
    }
}

module.exports = {
    create,
    index,
    edit
}