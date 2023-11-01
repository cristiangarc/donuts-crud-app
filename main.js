const addDonutForm = document.querySelector("form");

addDonutForm.addEventListener("submit", (event) => {
    event.preventDefault();

    const { donut, price, inStockYes, isVegan } = event.target;
    
    const article = createDonut(donut.value, price.value, inStockYes.checked, isVegan.value);

    
})