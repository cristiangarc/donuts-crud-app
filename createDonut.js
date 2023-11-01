// create an article with a donut that has specific details like name, price, in stock
const createDonut = (name, price=0, inStock=false, isVegan=false, url="https://external-content.duckduckgo.com/iu/?u=http%3A%2F%2Fcdn.onlinewebfonts.com%2Fsvg%2Fimg_480297.png&f=1&nofb=1&ipt=71ef17c03dd01f813313b86f2a2de6e0ee1105e019a1ca8efc8d62cafbd9663d&ipo=images") => {
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
      <h4>${Number(price).toFixed(2)}<h4/>`;
      
      article.append(removeButton);
  }

  return article;
}

const generateDonut = (name, price, inStock, isVegan, url) => {

  // create a new article
  const article = createDonut(name, price, inStock, isVegan, url);

  // grab section .donuts from DOM
  const sectionDonuts = document.querySelector("section.donuts");
  // append the newly created article
  sectionDonuts.append(article);
}

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

for (const i of '0123') {
  const donut = donuts[Number(i)];
  // generate an article
  generateDonut(donut.name, donut.priceInCents / 100, donut.inStock, donut.isVegan);
}

const buttons = document.querySelectorAll("input[type='submit'");
for (const button of buttons) {
  button.addEventListener("click", (event) => {
    event.target.closest(".single-donut").remove();
  })
}