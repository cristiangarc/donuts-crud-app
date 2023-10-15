const { readJSONFile, writeJSONFile } = require('./src/helpers.js');
const { index, create, edit, destroy, show, addToCart, all } = require('./src/donutsController.js');
const donuts = readJSONFile('./data', 'donuts.json');
let cart = readJSONFile('./data', 'cart.json');
const inform = console.log;


function run() {
    let writeToFile = false;
    let updatedDonuts = [];

    let writeToCart = false;
    // shopping cart
    let updatedCart = [];

    const action = process.argv[2];
    const id = process.argv[3];
    let name = process.argv[4];

    if (action.toLowerCase() == 'create' || action.toLowerCase() == 'cart') {
        name = id;
    }

    if (!id) {  
        inform('Please input an id');
    }

    switch (action) {
        case 'index':
            // Show all of the donuts, in stock or otherwise
            const donutsView = index(donuts);
            inform(donutsView);
            break;
        case 'create':
            updatedDonuts = create(donuts, name);
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
            break;
        case 'cart':
            updatedCart = addToCart(cart, name);
            if (!updatedCart) {
                inform('There was an error when updating the cart');
            } else {
                inform('Item successfully added to cart');
            }
            writeToCart = true;
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
// console.log(cart);