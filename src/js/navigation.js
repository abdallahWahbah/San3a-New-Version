const navListIcon = document.querySelector(".js--nav__list--icon");
const navSearchIcon = document.querySelector(".js--nav__list--search");
const navList = document.querySelector(".nav__list");
const navSearch = document.querySelector(".nav__search");

navListIcon.addEventListener("click", () =>
{
    //display the list
    navList.classList.toggle("active");
    
    // colorize the item clicked
    navListIcon.classList.toggle("active");

    // restore the default color for each icon
    navSearchIcon.classList.remove("active");
    
    // hide search, cart
    navSearch.classList.remove("active");
});
navSearchIcon.addEventListener("click", () =>
{
    // display search input
    navSearch.classList.toggle("active");

    // colorize the item clicked
    navSearchIcon.classList.toggle("active");

    // restore the default color for each icon
    navListIcon.classList.remove("active");

    // hide nav list, cart
    navList.classList.remove("active");
});


// sticky when reaching half of the header
// For index page
if(document.querySelector(".header"))
{
    var waypoint = new Waypoint({
        element: document.querySelector(".header"),
        handler: function(direction) {
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
// if(location.href.includes("__/__/"))
// {
//     console.log(location.href, typeof location.href);
//     location.href.replace("__/__/", "");
//     console.log(location.href);
// }
// if(document.querySelector(".nav__link--home"))
// {
//     document.querySelector(".nav__link--home").addEventListener("click", (e) =>
//     {
//         e.preventDefault();
//         location.href="./index.html"
//     })
// }
if(document.querySelector(".nav__link--tutorials"))
{
    document.querySelector(".nav__link--tutorials").addEventListener("click", (e) =>
    {
        e.preventDefault();
        location.href="./tutorials.html"
    })
}
if(document.querySelector(".nav__link--about"))
{
    document.querySelector(".nav__link--about").addEventListener("click", (e) =>
    {
        e.preventDefault();
    })
}
if(document.querySelector(".nav__link--categories"))
{
    document.querySelector(".nav__link--categories").addEventListener("click", (e) =>
    {
        e.preventDefault();
        location.href="./filter.html"
    })
}
if(document.querySelector(".nav__link--products"))
{
    document.querySelector(".nav__link--products").addEventListener("click", (e) =>
    {
        e.preventDefault();
        location.href="./bestProducts.html"
    })
}


// search about product name and move to filter page with that name
let search = document.querySelector(".nav__input");
if(search)
{
    search.nextElementSibling.addEventListener("click", ()=>
    {
        // console.log(search.value);
        location.href = `filter.html?input=${search.value}`
    });
}