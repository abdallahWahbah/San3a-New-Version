const navListIcon = document.querySelector(".js--nav__list--icon");
const navSearchIcon = document.querySelector(".js--nav__list--search");
const navCartIcon = document.querySelector(".js--nav__list--cart");
const navList = document.querySelector(".nav__list");
const navSearch = document.querySelector(".nav__search");
const navCart = document.querySelector(".nav__cart")

navListIcon.addEventListener("click", () =>
{
    //display the list
    navList.classList.toggle("active");
    
    // colorize the item clicked
    navListIcon.classList.toggle("active");

    // restore the default color for each icon
    navSearchIcon.classList.remove("active");
    navCartIcon.classList.remove("active");
    
    // hide search, cart
    navSearch.classList.remove("active");
    navCart.classList.remove("active");
});
navSearchIcon.addEventListener("click", () =>
{
    // display search input
    navSearch.classList.toggle("active");

    // colorize the item clicked
    navSearchIcon.classList.toggle("active");

    // restore the default color for each icon
    navListIcon.classList.remove("active");
    navCartIcon.classList.remove("active");

    // hide nav list, cart
    navList.classList.remove("active");
    navCart.classList.remove("active");
});
navCartIcon.addEventListener("click", () =>
{
    // display the cart
    navCart.classList.toggle("active");

    // colorize the item clicked
    navCartIcon.classList.toggle("active");

    // restore the default color for each icon
    navListIcon.classList.remove("active");
    navSearchIcon.classList.remove("active");

    // hide nav list, search
    navList.classList.remove("active");
    navSearch.classList.remove("active");
});