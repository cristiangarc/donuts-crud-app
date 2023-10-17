const { nanoid } = require("nanoid");
const donutPrices = require('../data/donutPrices.json');
const veganDonuts = require('../data/veganDonuts.json');
const inform = console.log;

const create = (donuts, name) => {
    const currentDonuts = donuts.map((dn) => dn.name);
    if (currentDonuts.includes(name)) {
        return null;
    }

    const newDonut = {
        name: name,
        priceInCents: donutPrices[name] || 100,
        id: nanoid(4),
        inStock: true,
        isVegan: veganDonuts.includes(name)
    }
    donuts.push(newDonut);
    return donuts;
}

const index = (donuts) => {
    return donuts.map((donut) => donut.id + ', ' + donut.name +
    ', price: ' + donut.priceInCents + ', in stock: ' + donut.inStock);
}

const edit = (donuts, id, name) => {
    const index = donuts.findIndex((dn) => dn.id == id);
    if (index > -1) {
        const donut = donuts[index];
        donut.name = name;
        donut.priceInCents = donutPrices[name] || 100;
        donut.inStock = true;
        donut.isVegan = veganDonuts.includes(name);
        inform('Donut successfully updated');
        return donuts;
    } else {
        inform('Donut not found. No action taken');
        return donuts;
    }
}

const destroy = (donuts, id) => {
    const index = donuts.findIndex((dn) => dn.id == id);
    if (index > -1) {
        donuts.splice(index, 1);
        inform('Donut successfully deleted');
        return donuts;
    } else {
        inform('Donut not found. No action taken');
        return donuts;
    }
}

const show = (donuts, id) => {
    const donut = donuts.find((dn) => dn.id == id);
    if (!donut) {
        return 'No donut with that ID';
    } else {
        return donut.id + ' ' + donut.name + ' ' + donut.priceInCents + ' is vegan: ' + donut.isVegan;
    }
}

const addToCart = (crt, name) => {
    crt.push(name);
    return crt;
}

const getAll = (crt) => {
    return crt.map((item) => item);
}

const getPrice = (crt) => {
    return crt.reduce((acc, curr) => acc + donutPrices[curr], 0);
}

const getItems = (crt) => {
    const out = {};
    crt.forEach((dn) => {
        if (out[dn]) {
            out[dn] += 1;
        } else {
            out[dn] = 1;
        }
    });
    return out;
}

const getVeganDonuts = (donuts) => {
    return donuts.filter((dn) => dn.isVegan).map((dn) => dn.name);
}

const below = (donuts, prce = 0) => {
    const filteredDonuts = donuts.filter((dn) => dn.priceInCents <= prce);
    return filteredDonuts.map((dn) => dn.name);
}

module.exports = {
    create,
    index,
    edit,
    destroy,
    show,
    addToCart,
    getAll,
    getPrice,
    getItems,
    getVeganDonuts,
    below
}