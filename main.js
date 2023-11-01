const donuts = [
    {
      "name": "chocolate",
      "priceInCents": 100,
      "id": "RE0n",
      "inStock": true,
      "isVegan": false
    },
    {
      "name": "vegan pumpkin",
      "priceInCents": 250,
      "id": "jcfr",
      "inStock": true,
      "isVegan": true
    },
    {
      "name": "vegan maple bacon",
      "priceInCents": 225,
      "id": "ll5o",
      "inStock": false,
      "isVegan": true
    },
    {
      "name": "vanilla",
      "priceInCents": 150,
      "id": "THdi",
      "inStock": true,
      "isVegan": false
    },
    {
      "name": "powdered",
      "priceInCents": 100,
      "id": "zDWJ",
      "inStock": true,
      "isVegan": false
    },
    {
      "name": "blueberry",
      "priceInCents": 100,
      "id": "l34g",
      "inStock": true,
      "isVegan": false
    }
  ]

const createDonut = (name, price=0, inStock=false, isVegan=false, url="") => {
    const article = document.createElement('article');
    
    if (name) {
        article.innerHTML = `<h3>${name}</h3>
        <img style="width: 150px" src="${url}">
        <h4>Price: ${price}<h4/>
        <h4 style="color: green">${inStock ? "In Stock" : ""}<h4/>
        <h4>Vegan: ${isVegan ? "yes" : "no"}`;

    }

    return article;
}

// create additional article/(single donut) elements
for (const donut of donuts) {
    const article = createDonut(donut.name, donut.priceInCents, donut.inStock, donut.isVegan);

    const mainSection = document.querySelector('main section');
    mainSection.append(article)
}
