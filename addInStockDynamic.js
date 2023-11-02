const addInStockDynamic = (article) => {
    const h4StockVal = article.children[3];
    h4StockVal.addEventListener("click", (event) => {
        const isInStock = h4StockVal.textContent == "In Stock";
        if (!isInStock) {
            h4StockVal.textContent = "Out of Stock";
            h4StockVal.setAttribute("style", "color='red'");
        }
    })
}
