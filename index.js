function run() {
    const action = process.argv[2];

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
}

run();