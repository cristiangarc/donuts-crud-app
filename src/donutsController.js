const { nanoid } = require("nanoid");

const create = (name) => {
    return {
        name: name,
        priceInCents: 100,
        id: nanoid(4),
        flavor: 'sweet'
    }
}