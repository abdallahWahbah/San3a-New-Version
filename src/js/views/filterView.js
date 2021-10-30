export let renderProduct = (product) =>
{
    const markup = 
    `
    <div class="product">
        <img src="${product.image}" alt="${product.description}" class="product__image" data-itemid = ${product.id}>
        <h3 class="product__title">${product.name}</h3>
        <div class="product__price--container">
            <div class="product__price--new">${product.price}$</div>
        </div>
        <div class="product__stars">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
        </div>
    </div>
    `;
    document.querySelector(".products").insertAdjacentHTML("afterbegin", markup);
}

export let eraseProducts = () =>
{
    document.querySelector(".products").innerHTML="";
}

export let renderCategories = (cat) =>
{
    const markup =
    `
        <li class="filter__container--item"><a class="filter__container--link">${cat.name}</a></li>
    `;
    document.querySelector(".filter__container--list").insertAdjacentHTML("afterbegin", markup);
}