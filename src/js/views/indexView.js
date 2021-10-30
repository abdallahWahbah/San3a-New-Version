export let renderProduct = (product) =>
{
    const markup=
    `
    <div class="product">
        <img src="${product.image}" alt="${product.name}" class="product__image" data-itemid = ${product.id}>
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
        <div class="product__cart__like">
            <div class="btn btn--white index__product--cart" data-cartitemid=${product.id}>Add to cart</div>
            <ion-icon name="heart-outline"></ion-icon>
        </div>
    </div>
    `;
    document.querySelector(".products").insertAdjacentHTML("afterbegin", markup);
};

export let renderCategory = (cat)=>
{
    const markup=
    `
    <div class="cat">
        <div class="cat__container">
            <img src="${cat.image}"  alt="${cat.name}" class="cat__image">
            <div class="cat__title--container">
                <h3 class="cat__title">${cat.name}</h3>
            </div> 
        </div>
    </div>
    `;
    document.querySelector(".top").insertAdjacentHTML("afterbegin", markup);
}