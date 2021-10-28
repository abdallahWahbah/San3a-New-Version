const navListIcon = document.querySelector(".js--nav__list--icon");
const navSearchIcon = document.querySelector(".js--nav__list--search");
// const navCartIcon = document.querySelector(".js--nav__list--cart");
const navList = document.querySelector(".nav__list");
const navSearch = document.querySelector(".nav__search");
// const navCart = document.querySelector(".nav__cart")

navListIcon.addEventListener("click", () =>
{
    //display the list
    navList.classList.toggle("active");
    
    // colorize the item clicked
    navListIcon.classList.toggle("active");

    // restore the default color for each icon
    navSearchIcon.classList.remove("active");
    // navCartIcon.classList.remove("active");
    
    // hide search, cart
    navSearch.classList.remove("active");
    // navCart.classList.remove("active");
});
navSearchIcon.addEventListener("click", () =>
{
    // display search input
    navSearch.classList.toggle("active");

    // colorize the item clicked
    navSearchIcon.classList.toggle("active");

    // restore the default color for each icon
    navListIcon.classList.remove("active");
    // navCartIcon.classList.remove("active");

    // hide nav list, cart
    navList.classList.remove("active");
    // navCart.classList.remove("active");
});
// navCartIcon.addEventListener("click", () =>
// {
//     // display the cart
//     navCart.classList.toggle("active");

//     // colorize the item clicked
//     navCartIcon.classList.toggle("active");

//     // restore the default color for each icon
//     navListIcon.classList.remove("active");
//     navSearchIcon.classList.remove("active");

//     // hide nav list, search
//     navList.classList.remove("active");
//     navSearch.classList.remove("active");
// });


// sticky when reaching half of the header
// For index page
if(document.querySelector(".header"))
{
    var waypoint = new Waypoint({
        element: document.querySelector(".header"),
        handler: function(direction) {
            console.log("asdkajsdjkh");
            document.querySelector(".nav").classList.add("fixed");
        },
        offset: 20 
    });
}
// For product page 
if(document.querySelector(".section__product"))
{
    var waypoint = new Waypoint({
        element: document.querySelector(".section__product"),
        handler: function(direction) {
            console.log("asdkajsdjkh");
            document.querySelector(".nav").classList.add("fixed");
        },
        offset: 20 
    });
}
// For addItem page 
if(document.querySelector(".add"))
{
    var waypoint = new Waypoint({
        element: document.querySelector(".add"),
        handler: function(direction) {
            console.log("asdkajsdjkh");
            document.querySelector(".nav").classList.add("fixed");
        },
        offset: 20 
    });
}
// For checkout page 
if(document.querySelector(".checkout"))
{
    var waypoint = new Waypoint({
        element: document.querySelector(".checkout"),
        handler: function(direction) {
            console.log("asdkajsdjkh");
            document.querySelector(".nav").classList.add("fixed");
        },
        offset: 20 
    });
}
// For filter page 
if(document.querySelector(".filter"))
{
    var waypoint = new Waypoint({
        element: document.querySelector(".filter"),
        handler: function(direction) {
            console.log("asdkajsdjkh");
            document.querySelector(".nav").classList.add("fixed");
        },
        offset: 20 
    });
}
// For best products page 
if(document.querySelector(".js--best__products--page"))
{
    var waypoint = new Waypoint({
        element: document.querySelector(".js--best__products--page"),
        handler: function(direction) {
            console.log("asdkajsdjkh");
            document.querySelector(".nav").classList.add("fixed");
        },
        offset: 20 
    });
}
// For tutorials page 
if(document.querySelector(".tutorials"))
{
    var waypoint = new Waypoint({
        element: document.querySelector(".tutorials"),
        handler: function(direction) {
            console.log("asdkajsdjkh");
            document.querySelector(".nav").classList.add("fixed");
        },
        offset: 20 
    });
}
// For video__show page 
if(document.querySelector(".video__show"))
{
    var waypoint = new Waypoint({
        element: document.querySelector(".video__show"),
        handler: function(direction) {
            console.log("asdkajsdjkh");
            document.querySelector(".nav").classList.add("fixed");
        },
        offset: 20 
    });
}
// For cart page 
if(document.querySelector(".cart"))
{
    var waypoint = new Waypoint({
        element: document.querySelector(".cart"),
        handler: function(direction) {
            console.log("asdkajsdjkh");
            document.querySelector(".nav").classList.add("fixed");
        },
        offset: 20 
    });
}

// --------------------------- Click on logo to go to the main page --------------------------- 
if(document.querySelector(".nav__logo"))
{
    document.querySelector(".nav__logo").addEventListener("click", () =>
    {
        location.href="./index.html"
    })
}