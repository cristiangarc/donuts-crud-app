const { readJSONFile, writeJSONFile } = require('./src/helpers.js');
const { index, create, edit } = require('./src/donutsController.js');
const donuts = readJSONFile('./data', 'donuts.json');
const inform = console.log;

function run() {
    let writeToFile = false;
    let updatedDonuts = [];
    const action = process.argv[2];
    const id = process.argv[3];
    let name = process.argv[4];

    if (action.toLowerCase() == 'create') {
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
            inform(action, id);
            break;
        case 'update':
            updatedDonuts = edit(donuts, id, name);
            writeToFile = true;
            break;
        case 'destroy':
            updatedDonuts = destroy(donuts, id);
            writeToFile = true;
            break;
    }

    if (writeToFile) {
        writeJSONFile('./data', 'donuts.json', updatedDonuts);
    }
}

run();