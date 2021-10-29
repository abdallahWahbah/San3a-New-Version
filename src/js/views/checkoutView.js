let totalPrice=0;

export let renderProduct = (product) =>
{
    let cities = ["Giza", "Ismailia", "October", "Alexandrie", "Fayoum", "Cairo", "Herghada"]
    let count = Math.ceil(Math.random()*6);
    totalPrice += count * product.price;
    
    const markup =
    `
    <div class="checkout__item" data-itemid = ${product.id}>
        <img src="${product.image}" alt="${product.name}" class="checkout__item--img">

        <div class="checkout__item--details">
            <h1 class="checkout__item--name">${product.name}</h1>
            <h3 class="checkout__item--from">Shoppimg from: <span class="checkout__item--city">${cities[Math.floor(Math.random() * cities.length)]}</span></h3>
            <h3 class="checkout__item--save">Save for later</h3>
        </div>

        <div class="product__quantity">
            <div class="product__minus">-</div>
            <div class="product__quantity--value">${count}</div>
            <div class="product__plus">+</div>
        </div>

        <h1 class="checkout__item--price">${count * product.price}$</h1>

        <div class="checkout__item--delete">
            <div class="checkout__item--delete-icon">x</div>
        </div>
    </div>
    `;
    document.querySelector(".checkout .checkout__header").insertAdjacentHTML("afterend", markup);
}

export let modifyTotalPrice = (oneProductTotalPrice = 0) =>
{
    document.querySelector(".checkout__total--price").textContent = `${totalPrice}$`;
}

export const deleteItem = id =>
{
    const item = document.querySelector(`[data-itemid="${id}"]`);
    item.parentElement.removeChild(item);
}

export const deleteTotal = (id) =>
{
    // const item = document.querySelector(".checkout__total");
    // item.parentElement.removeChild(item);
    document.querySelector(".checkout__total--price").textContent=""
}

export let renderRelatedTitle = () =>
{
    let markup =
    `
        <h1 class="checkout__offer">Customers who bought items in your cart also bought: </h1>
    `;
    document.querySelector(".checkout__page--js").insertAdjacentHTML("beforeend", markup);
};

// export let renderRelatedProductsContainer = () =>
// {
//     const markup =
//     `
//         <div class="products"></div>
//     `;
//     document.querySelector(".checkout__offer").insertAdjacentHTML("afterend", markup);
// }

export let renderRelatedProduct = (product) =>
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