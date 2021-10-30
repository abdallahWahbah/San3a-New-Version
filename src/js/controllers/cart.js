import * as cartView from '../views/cartView';

cartView.renderHeader();
let products = JSON.parse(localStorage.getItem('cartProducts'));
console.log(products);

products.forEach(currentProduct =>
{
    cartView.renderProduct(currentProduct);  
})

cartView.renderCartTotalButtons(0);


document.querySelector(".cart__page--js").addEventListener("click", (e) =>
{
    // when click on checkout
    if(e.target.matches(".cart__checkout--js"))
    {
        location.href='checkout.html'
    }

    const id = e.target.closest(".cart__item").dataset.itemid; // get the id of the item you click on
    console.log("id: " + id);
    

    // handle delete button for each product
    if(e.target.matches(".cart__item--delete"))
    {
        // get product total price to delete it from the totals
        const productTotalPrices = document.querySelector(`[data-itemid="${id}"] .cart__item--value-total`).textContent;
        console.log(parseInt(productTotalPrices.replace("$", "")));

        deleteItem(id);

        // delete buttons and render them again to refrech the totals
        cartView.deleteButtons();
        cartView.renderCartTotalButtons(parseInt(productTotalPrices));
    }
});

// remove the item from the local storage and from UI
let deleteItem = (id) =>
{
    const index = products.findIndex (el => el.id === parseInt(id));
    products.splice(index, 1);

    // save the new products in the cart to "cartProducts" local storage
    localStorage.setItem("cartProducts", JSON.stringify(products));

    // remove the product from UI
    cartView.deleteItem(parseInt(id));
}