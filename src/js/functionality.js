// --------------------------- Checkout page /  choose between checkout and payment--------------------------- 
let checkName = document.querySelector(".js--checkout__name-check");
let paymentName = document.querySelector(".js--checkout__name-payment");

const showPayment = () =>
{
    let items = Array.from(document.querySelectorAll(".checkout__item"));
    let deletes = [
        ...items,
        ...Array.from(document.querySelectorAll(".checkout__line")),
        document.querySelector(".checkout__total"),
        document.querySelector(".checkout__offer"),
        document.querySelector(".products")
    ];
    deletes.forEach(current =>
    {
        current.style.display = "none";
    })
    paymentName.style.color = "#d94141";
    checkName.style.color = "#333339";

    document.querySelector(".js--payment").style.display = "flex";
}
const showCheckout = () =>
{
    if(document.querySelector(".js--payment"))
    {
        document.querySelector(".js--payment").style.display = "none";
    }
    checkName.style.color = "#d94141";
    paymentName.style.color = "#333339";

    let items = Array.from(document.querySelectorAll(".checkout__item"));
    items.forEach(current =>
    {
        current.style.display = "flex";
    });

    Array.from(document.querySelectorAll(".checkout__line")).forEach(current =>
    {
        current.style.display = "block";  
    })
    document.querySelector(".checkout__total").style.display = "block";
    document.querySelector(".checkout__offer").style.display = "block";
    document.querySelector(".products").style.display = "flex";
};
showCheckout();
if(checkName)
{
    checkName.addEventListener("click", showCheckout);
}
if(paymentName)
{
    paymentName.addEventListener("click",  showPayment);
}
