// console.log(localStorage.getItem("token"));
import bestProductsModel from '../models/bestProductsModel';
import productModel from '../models/productModel';
import filterModel from '../models/filterMode';
import * as indexView from '../views/indexView';


// render categories to the main page
const handleRenderingCategories = async ()=>
{
    let cats = new filterModel;
    try
    {
        await cats.getCategories();
        cats.results.forEach(cat =>
        {
            indexView.renderCategory(cat)
        });
    }
    catch(error){console.log(error)}
}
handleRenderingCategories();

// handle clicking on category to move to filter page and filter the products with that category
document.querySelector(".top").addEventListener("click", (e) =>
{
    // go to product page and preview the product
    if(e.target.closest(".cat"))
    {
        let category = e.target.closest(".cat__title").textContent;
        location.href = `filter.html?category=${category}`;
    }    
});

// render products to "Our Products section"
const getProducts = async () =>
{
    let products = new bestProductsModel();

    try
    {
        await products.getBestProducts();

        // get the products from the model
        let productResults = products.results;

        // pass products to indexView
        console.log(productResults);

        for (let index = 0; index < 15; index++) 
        {
            indexView.renderProduct(productResults[index]); 
        }
    }
    catch(error)
    {
        console.log(error);
    }
}
getProducts();

// load more products by going to (best) products page
document.querySelector(".index__load--more").addEventListener("click", () =>
{
    location.href = "bestProducts.html";
});


// handle clicking on product to move to product page or to add to cart page
document.querySelector(".products").addEventListener("click", (e) =>
{
    // go to cart page and add the item to the cart
    if(e.target.closest(".product"))
    {
        if(e.target.closest(".index__product--cart"))
        {
            let id = e.target.closest(".index__product--cart").dataset.cartitemid;
            if(id)
            {
                // get the product and pass it to cart page
                controlProduct(Number(id));
            }
        }
    }

    // go to product page and preview the product
    if(e.target.closest(".product"))
    {
        if(e.target.closest(".product__image"))
        {
            let cartItemID = e.target.closest(".product__image").dataset.itemid;
            // console.log(cartItemID);        
            location.href = `product.html?id=${cartItemID}`;
        }
    }
});


const controlProduct = async (cartItemID) =>
{
    let prod = new productModel(cartItemID); 

    try
    {
        await prod.getProduct();
        let product = prod.product.data;
        console.log(product);

        addProductToCart(product);
    }
    catch(error)
    {
        console.log(error);
    }
}

let addProductToCart = (product) =>
{
    // adding produt to cart list
    let cartProducts = [];
    let cartProductsssss = JSON.parse(localStorage.getItem('cartProducts'));
    if(cartProductsssss == null)
    {
        console.log("empty localStorage");
        cartProducts.push(product);
    } 
    else
    {
        cartProducts.push(product);
        cartProductsssss.forEach(current =>
        {
            cartProducts.push(current);
        }); 
    }
    

    // removing duplication
    const filteredArr = cartProducts.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) {
        return acc.concat([current]);
    } else {
        return acc;
    }
    }, []);

    filteredArr.sort(function(a, b){return a.id - b.id});

    // adding produt to cart list
    localStorage.setItem("cartProducts", JSON.stringify(filteredArr));
    cartProducts = JSON.parse(localStorage.getItem('cartProducts'));
    console.log(cartProducts);        

    location.href = `cart.html`;
}