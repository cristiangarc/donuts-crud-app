const { readJSONFile, writeJSONFile } = require('./src/helpers.js');
const { index, create } = require('./src/donutsController.js');
const donuts = readJSONFile('./data', 'donuts.json');
const inform = console.log;

function run() {
    let writeToFile = false;
    const updatedDonuts = [];
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
            create(donuts, name);
            writeToFile = true;
            break;
        case 'show':
            inform(action, id);
            break;
        case 'update':
            inform(action, id);
            break;
        case 'destroy':
            inform(action, id);
            break;
    }

    if (writeToFile) {
        writeJSONFile('./data', 'donuts.json', updatedDonuts);
    }
}

run();