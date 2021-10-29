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
        const productTotalPrices = document.querySelector(`[data-itemid="${id}"] .cart__item--delete`).textContent;
        // console.log(parseInt(productTotalPrices))


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
    // [2, 4 ,8] splice(1, 2) (start, num of elements) --> returns [4, 8], original array = [2]
    // [2, 4, 4] slice(1, 2) (start, end) --> returns 4 because the end in excluded, original array = [2, 4, 8]
    products.splice(index, 1);

    // save the new products in the cart to "cartProducts" local storage
    localStorage.setItem("cartProducts", JSON.stringify(products));

    // remove the product from UI
    cartView.deleteItem(parseInt(id));
}