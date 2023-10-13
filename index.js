const { readJSONFile, writeJSONFile } = require('./src/helpers');
const donuts = readJSONFile('./data', 'donuts.json');

function run() {
    const writeToFile = false;
    const updatedDonuts = [];
    const action = process.argv[2];
    const id = process.argv[3];
    const name = process.argv[4];

    if (action.toLowerCase() == 'create') {
        name = id;
    }

    if (!id) {  
        inform('Please input an id');
    }

    switch (action) {
        case 'index':
            // Show all of the donuts, in stock or otherwise
            inform(action);
            break;
        case 'create':
            inform(action);
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