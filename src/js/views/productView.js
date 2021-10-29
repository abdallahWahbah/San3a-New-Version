export const renderImage = (product) =>
{
    const markup =
    `
        <img src="${product.image}" alt="${product.name}" class="product__image--big">
    `;

    document.querySelector(".product__images").insertAdjacentHTML("afterbegin", markup);
}

export const renderNamePriceDetails = (product) =>
{
    const markup =
    `
        <h3 class="product__title">${product.name}</h3>
        <div class="product__stars">
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star"></ion-icon>
            <ion-icon name="star-half"></ion-icon>
        </div>
        <div class="product__price">${product.price}$</div>
        <hr>
        <p class="product__paragraph">${limitDescription(product.description)}</p>
    `;

    document.querySelector(".product__details").insertAdjacentHTML('afterbegin', markup);
}

export const limitDescription = (desc, limit = 170) =>
{
    if(desc.length > limit)
    {
        return desc.substring(0, limit) + " ...";
    }

    return desc;
}

export const renderDetailedParagraph = (product) =>
{

    const markup =
    `
    <p class="product__desc--detailed">
    ${product.description}
    </p>
    `;
    document.querySelector(".product__desc--detailed").insertAdjacentHTML('afterbegin', markup);
}