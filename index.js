const { readJSONFile, writeJSONFile } = require('./src/helpers.js');
const { index, create, edit, destroy, show, addToCart, getAll, getPrice, getItems, getVeganDonuts, below } = require('./src/donutsController.js');
const donuts = readJSONFile('./data', 'donuts.json');
let cart = readJSONFile('./data', 'cart.json');
const inform = console.log;


function run() {
    let writeToFile = false;
    let updatedDonuts = [];

    let writeToCart = false;
    let updatedCart = []; // shopping cart

    const action = process.argv[2];
    const id = process.argv[3];
    let name = process.argv[4];
    let belowPrice = 0;
    
    if (action.toLowerCase() == 'create' || action.toLowerCase() == 'cart') {
        if (!id) {
            inform('Please enter a name');
            return null;
        }
        name = id;
    }
    
    if (action.toLowerCase() == 'below' && id) {
        belowPrice = Number(id);
    } else if (action.toLowerCase() == 'below' && !id) {
        inform('Please enter an ID');
        return null;
    }

    if (action.toLowerCase() == 'update' && !name) {
        inform('Please enter a name')
        return null;
    }

    switch (action) {
        case 'index':
            // Show all of the donuts, in stock or otherwise
            const donutsView = index(donuts);
            inform(donutsView);
            break;
        case 'create':
            updatedDonuts = create(donuts, name);
            if (!updatedDonuts) {
                inform('Donut already exists');
                break;
            }
            inform('Donut successfully created');
            writeToFile = true;
            break;
        case 'show':
            const showView = show(donuts, id);
            inform(showView);
            break;
        case 'update':
            updatedDonuts = edit(donuts, id, name);
            if (!updatedDonuts) {
                inform('There was an error when updating the items. Please input a valid ID and name.')
            } else {
                writeToFile = true;
            }
            break;
        case 'destroy':
            updatedDonuts = destroy(donuts, id);
            if (!updatedDonuts) {
                inform('There was an error when deleting the item. Please input a valid ID.')
            } else {
                writeToFile = true;
            }
            break;
        case 'cancel':
            updatedCart = [];
            writeToCart = true;
            inform('Cart successfully emptied!')
            break;
        case 'cart':
            updatedCart = addToCart(donuts, cart, name);
            if (!updatedCart) {
                inform('There was an error when updating the cart');
            } else {
                inform('Item successfully added to cart');
            }
            writeToCart = true;
            break;
        case 'all':
            const allView = getAll(cart);
            inform(allView);
            break;
        case 'price':
            const pr = getPrice(cart);
            inform('price of cart: $' + (pr / 100).toFixed(2));
            break;
        case 'items': // get the number of each donut in the cart
            const itms = getItems(cart);
            inform('items in cart:\n', itms);
            break;
        case 'vegan': // show all vegan donuts
            const veganDnts = getVeganDonuts(donuts);
            inform(veganDnts);
            break;
        case 'below':
            const donutsBelowPrice = below(donuts, belowPrice);
            inform('donuts below $' + (belowPrice/100).toFixed(2) + ' : ' + donutsBelowPrice);
            break;
    }

    if (writeToFile) {
        writeJSONFile('./data', 'donuts.json', updatedDonuts);
    }
    if (writeToCart) {
        writeJSONFile('./data', 'cart.json', updatedCart);
    }
}

run();