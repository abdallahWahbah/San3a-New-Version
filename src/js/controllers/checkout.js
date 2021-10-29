import * as checkoutView from '../views/checkoutView';
import checkoutModel from '../models/ckeckoutModel';
import * as bestProductsModel from '../models/bestProductsModel';

let relatedProducts;

let products = JSON.parse(localStorage.getItem('cartProducts'));
console.log(products);

products.forEach(currentProduct  =>
{
    checkoutView.renderProduct(currentProduct);
});

checkoutView.modifyTotalPrice();

document.querySelector(".products").addEventListener("click", e =>
{
    // get related item id when you click on it
    const relatedID = e.target.closest(".product__image").dataset.itemid;
    console.log(relatedID);

    location.href = `product.html?id=${relatedID}`;

});  


// get products to compare tags

const getProducts = async (productData) =>
{
    let products = new checkoutModel();

    let productResults = [];
    try
    {
        await products.getBestProducts();

        // get the products from the model
        productResults = products.results;

        // console.log(productResults);

        // get related products by sorting
        relatedProducts = sortProducts(productData, productResults);
        // console.log(relatedProducts);

        relatedProducts.forEach(everyProduct =>
        {
            // console.log(everyProduct);
            checkoutView.renderRelatedProduct(everyProduct);
        })


    }
    catch(error)
    {
        console.log(error)
    }
}

// get products that relates to the product (sort by tags)
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

// render related products...with duplication 
if(products.length !== 0) products.forEach(prod => getProducts(prod));