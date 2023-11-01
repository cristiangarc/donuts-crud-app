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
    
    article.classList.add("single-donut");

    // create a button, add text to the button, and add an event listener to the button to remove the article
    // append the button to the article
    const removeButton = document.createElement("button");
  
    removeButton.textContent = "Remove Donut";
    removeButton.addEventListener("click", (event) => {
      // find the closest li to this button and remove it
      event.target.closest(".single-donut").remove();
      // count--;
      // addCount(count);
    })
    
    if (name) {
        article.innerHTML = `<h3>${name}</h3>
        <img style="width: 150px" src="${url}">
        <h4 style="color: ${inStock ? "green" : "red"}">${inStock ? "In Stock" : "Out of Stock"}<h4/>
        <h4>Vegan: ${isVegan ? "yes" : "no"}
        <h4>${(price/100).toFixed(2)}<h4/>`;
        
        article.append(removeButton);
    }

    return article;
}

// create additional article/(single donut) elements
for (const donut of donuts) {
    const article = createDonut(donut.name, donut.priceInCents, donut.inStock, donut.isVegan);

    const mainSection = document.querySelector('main section');
    mainSection.append(article)
}
