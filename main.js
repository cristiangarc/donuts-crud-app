const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { donut, price, inStock, isVeganYes } = event.target;

    let isInStock = false;
    const inStockVal = inStock.value;
    console.log(inStockVal);
    if (typeof inStockVal == 'string') {
        if (inStockVal == 'true') {
        isInStock = true;
        }
    };

    generateDonut(donut.value, price.value, isInStock, isVeganYes.checked);
    
    form.reset();
})