// create four additional article elements
for (const donut of donuts) {
    const article = createDonut(donut.name, donut.priceInCents, donut.inStock);

    const main = document.querySelector('main');
    main.append(article)
}

const createDonut = (name, price, inStock, url="") => {
    const article = document.createElement('article');
    article.innerHTML = `<h3>${name}</h3>
    <img style="width: 150px" src="${url}">
    <h4>Price: ${price}<h4/>
    <h4>In Stock: ${inStock}<h4/>`;

    return article;
}