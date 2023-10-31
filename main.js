// create four additional article elements
for (const i of '0123') {
    const article = document.createElement('article');
    article.innerHTML = `<h3>Donut ${Number(i) + 2}</h3>`;

    const main = document.querySelector('main');
    main.append(article)
}