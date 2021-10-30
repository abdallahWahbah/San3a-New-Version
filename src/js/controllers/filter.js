import bestProductsModel from '../models/bestProductsModel';
import productModel from '../models/productModel';
import * as filterView from '../views/filterView';
import filterModel from '../models/filterMode';

const category = new URLSearchParams(location.href.split('?')[1]).get('category');
const inputSearch = new URLSearchParams(location.href.split('?')[1]).get('input');
let categoryList = [], productList=[], filteredPriceList = [];

if(category)
{
    // console.log(category);
    if(category.includes("%20"))
    {
        category.replace("%20", "");
        getProducts();
    }
}
// render products to "Our Products section"
const getProducts = async () =>
{
    let products = new bestProductsModel();

    try
    {
        await products.getBestProducts();

        // get the products from the model
        let productResults = products.results;
        // console.log(productResults);

        // if you came from header search
        if(inputSearch)
        {
            inputSearch.toLowerCase();
            productResults.forEach(current =>
            {
                current.name = current.name.toLowerCase();
                if(current.name.includes(inputSearch))
                {
                    productList.push(current);
                }  
            })
            // console.log(productList);
            if(productList.length !== 0)
            {
                productList.forEach(cur =>
                {
                    filterView.renderProduct(cur);
                    // console.log(cur.price);
                });
            }
        }
        // if you  came from the index page >> Top categories
        else if(category)
        {
            productResults.forEach(current =>
            {
                if(current.product_category === category)
                {
                    categoryList.push(current);                    
                }  
            })
            if(categoryList.length !== 0)
            {
                categoryList.forEach(cur =>
                {
                    filterView.renderProduct(cur); 
                });
            }
        }
    }
    catch(error)
    {
        console.log(error);
    }
}
getProducts();


// render Categories
const handleRenderingCategories = async ()=>
{
    let cats = new filterModel;
    try
    {
        await cats.getCategories();
        cats.results.forEach(cat =>
        {
            filterView.renderCategories(cat)
        });
    }
    catch(error){console.log(error)}
}
handleRenderingCategories();


// handle clicking on product to move to product page
document.querySelector(".products").addEventListener("click", (e) =>
{
    // go to product page and preview the product
    if(e.target.closest(".product"))
    {
        let id = e.target.closest(".product__image").dataset.itemid;
        location.href = `product.html?id=${id}`;
        // console.log(id, typeof(id));
    }
});

// filter by price
document.querySelector(".filter__click--button").addEventListener("click", () =>
{
    let min = document.querySelector(".multi-range").dataset.lbound;
    let max = document.querySelector(".multi-range").dataset.ubound;
    console.log(min, max)

    filteredPriceList.length=0;

    // if you are came from the header search and the list is not empty
    if(productList.length !== 0)
    {        
        productList.forEach(current =>
        {
            if(current.price >= Number(min) && current.price <= Number(max))
            {
                filteredPriceList.push(current);
            }
        })
        if(filteredPriceList.length !== 0)
        {
            filterView.eraseProducts();
            filteredPriceList.forEach(cur =>
            {
                filterView.renderProduct(cur); 
            });
        }
        console.log(filteredPriceList);
    }
    // if you  came from the index page >> Top categories and the list is not empty
    else if(categoryList.length !== 0)
    {
        categoryList.forEach(current =>
        {
            if(current.price >= Number(min) && current.price <= Number(max))
            {
                filteredPriceList.push(current);
            }
        })
        if(filteredPriceList.length !== 0)
        {
            filterView.eraseProducts();
            filteredPriceList.forEach(cur =>
            {
                filterView.renderProduct(cur); 
            });
        }
        console.log(filteredPriceList);
    }
});


// filter by categories
document.querySelector(".filter__container--list").addEventListener("click", (e) =>
{
    let category = e.target.closest(".filter__container--link").textContent;
    if(category.includes("%20"))
    {
        category.replace("%20", "");
    }
    location.href = `filter.html?category=${category}`;
});
