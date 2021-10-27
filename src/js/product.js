// make the opacity for each color to be .4 except the chosen one to be 1
let colors = document.querySelectorAll(".product__color");
if(colors)
{
    colors.forEach(color =>
    {
        color.addEventListener("click", () =>
        {
            colors.forEach(el =>
            {
                el.style.opacity = ".4";  
            });
            color.style.opacity = "1";
            console.log(window.getComputedStyle(color,"").getPropertyValue("background-color"));
        });
    });
}

// Increase and Decrease quantity
let currentQuantity = 1;

let increase = document.querySelector(".product__plus");
let decrease = document.querySelector(".product__minus");
let quantity = document.querySelector(".product__quantity--value")

increase.addEventListener("click", () =>
{
    currentQuantity++;
    quantity.textContent = currentQuantity;
});

decrease.addEventListener("click", () =>
{
    if(currentQuantity === 1) return;
    currentQuantity--;
    quantity.textContent = currentQuantity;
});

// Choose size
const sizes = document.querySelectorAll(".product__size");
sizes.forEach(size =>
{
    size.addEventListener("click", () =>
    {
        sizes.forEach(el => 
        {
            el.style.background = "#fff";
            el.style.color = "#999";
        });
        size.style.background = "#d94141";
    }) ;
});


// --------------------------- Product page / Switch between decription and reviews / limit description--------------------------- 
let productDescription = document.querySelector(".product__desc--header");
let productReviews = document.querySelector(".product__reviews--header");
let productDescriptionShort = document.querySelector(".product__description");
let productDescriptionLong = document.querySelector(".product__desc--detailed");
let productReviewDescriptions = Array.from(document.querySelectorAll(".product__reviews--review-paragraph"));
if(productDescription)
{
    productDescription.addEventListener("click", () =>
    {
        productDescription.style.color = "#d94141";
        productReviews.style.color = "#333";
        document.querySelector(".product__reviews").style.display = "none";
        document.querySelector(".product__desc--detailed").style.display = "block";
    });
}
if(productReviews)
{
    productReviews.addEventListener("click", () =>
    {
        productReviews.style.color = "#d94141";
        productDescription.style.color = "#333";
        document.querySelector(".product__desc--detailed").style.display = "none";
        document.querySelector(".product__reviews").style.display = "block";
    });
}
if(productDescriptionShort)
{
    if(productDescriptionShort.textContent.length > 150 )
    {
        let shortDesc = productDescriptionShort.textContent.substring(0, 150);
        productDescriptionShort.textContent = shortDesc + "...........";
    }
}
if(productDescriptionLong)
{
    if(productDescriptionLong.textContent.length > 500 )
    {
        let shortDesc = productDescriptionLong.textContent.substring(0, 500);
        productDescriptionLong.textContent = shortDesc + "...........";
    }
}
if(productReviewDescriptions)
{
    productReviewDescriptions.forEach(cur =>
    {
        if(cur.textContent.length > 650 )
        {
            console.log(cur.textContent.length)
            let shortDesc = cur.textContent.substring(0, 650);
            cur.textContent = shortDesc + "...........";
        }
    })
}