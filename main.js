const form = document.querySelector("form");

form.addEventListener("submit", (event) => {
    event.preventDefault();

    const { donut, price, inStock, isVeganYes } = event.target;
    
    generateDonut(donut.value, price.value, inStock.value, isVeganYes.checked);
    
    form.reset();
})