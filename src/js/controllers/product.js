import productModel from '../models/productModel';
import bestProductsModel from '../models/bestProductsModel';
// import cartModel from '../models/cartModel';
import * as productView from '../views/productView';
import * as bestProductsView from '../views/bestProductsView';

let productResults;

// get id from href
const productId = new URLSearchParams(location.href.split('?')[1]).get('id');

const controlProduct = async () =>
{
    let prod = new productModel(productId);
    // let prod = new productModel(1); 

    try
    {
        await prod.getProduct();
        let productData = prod.product.data;
        
        // prepare UI for that product 
        productView.renderImage(productData);
        productView.renderNamePriceDetails(productData);
        productView.renderDetailedParagraph(productData);

        // click on `Add to cart` button
        controlCartCLick(productData);

        // -------------------------------------- Related products --------------------------------------

        // get the whole products
        getProducts(productData);

    }
    catch(error)
    {
        console.log(error);
    }
}
controlProduct();

const controlCartCLick = (product) =>
{
    document.querySelector(".product__add--cart").addEventListener("click", (e) =>
    {
        let quantity = document.querySelector(".product__quantity--value").textContent;    

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

        location.href = `cart.html?quantity=${quantity}`;

    });
}

// get products to compare tags
const getProducts = async (productData) =>
{
    let products = new bestProductsModel();

    try
    {
        await products.getBestProducts();

        // get the products from the model
        productResults = products.results;

        // console.log(productResults);

        // get related products by sorting
        let relatedProducts = sortProducts(productData, productResults);
        // console.log(relatedProducts);

        relatedProducts.forEach(everyProduct =>
        {
            // console.log(everyProduct);
            bestProductsView.renderProduct(everyProduct, '.products');
        })


    }
    catch(error)
    {
        console.log(error)
    }
}

// get products that relates to the product
let sortProducts = (product, products) =>
{
    let finalProducts = [];

    product.tags.forEach(cur =>
    {
        products.forEach(curr =>
        {
            curr.tags.forEach(current =>
            {
                if(cur === current)
                {
                    finalProducts.push(curr);
                }
            });     
        });
    });

    // removing duplication
    const filteredArr = finalProducts.reduce((acc, current) => {
    const x = acc.find(item => item.id === current.id);
    if (!x) {
        return acc.concat([current]);
    } else {
        return acc;
    }
    }, []);

    filteredArr.sort(function(a, b){return a.id - b.id});
    // console.log(filteredArr);
    return filteredArr;
}


// click on any related product to preview it instead of the present one
document.querySelector(".products").addEventListener("click", (e) =>
{
    console.log('aklfh jlhdfkj sdj fhkjsd hfkjd h')
    // get related item id when you click on it
    const relatedID = e.target.closest(".product__image").dataset.itemid;
    console.log(relatedID);

    location.href = `product.html?id=${relatedID}`;
});