export const clearResList = () => 
{
    // document.querySelector(".best__products--page-js").innerHTML="";
    document.querySelector(".paggination").innerHTML="";
}

export let renderProduct = (product, parent = '.products') =>
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
    document.querySelector(parent).insertAdjacentHTML('afterbegin', markup);
}



// --------------------------------------paggination -------------------------------------------------




export const renderResults = (products, page = 1, resPerPage = 12) =>
{
    // render results 
    const start = (page-1) * resPerPage;
    const end = page * resPerPage;

    document.querySelector('.products').innerHTML="";

    products.slice(start, end).forEach((product) => renderProduct(product));

    // Render pagination button
    renderButton(page, products.length, resPerPage);
}

const renderButton = (page, numResults, resPerPage) =>
{
    const pages = Math.ceil ( numResults / resPerPage);
    let button;

    if(page === 1 && pages > 1)
    {
        // Show only one button pointing to the next page (right)
        button = createButton(page, 'next')
    }
    else if (page < pages)
    {
        // Show 2 button, next and prev
        button =
        `
            ${createButton(page, 'prev')}
            ${createButton(page, 'next')}
        `
    }
    else if (page === pages && pages > 1)
    {
        // Show one button to prev
        button = createButton(page, 'prev')
    }

    document.querySelector(".paggination").insertAdjacentHTML('afterbegin', button);
}

// type : 'prev' or 'next'
const createButton = (page, type) =>
{
    const span = `<span class="paggination__number">page ${type === 'prev' ? page-1 : page+1}</span>`;
    let x =  `
        <button class="paggination__btn paggination__${type}" data-goto=${type === 'prev' ? page-1 : page+1}>
            ${type === "next" ? span : ''}
            <svg class="paggination__svg">
                <use xlink:href="sprite.svg#icon-triangle-${type === 'prev' ? 'left' : 'right'}"></use>
            </svg>
            ${type === "prev" ? span : ''}
        </button>
    `;
    if(type === "prev")
    {
        return `
        <div class="paggination__btn paggination__prev" data-goto=${page-1}>
            <ion-icon name="caret-back-outline"></ion-icon>
            <span class="paggination__number">Page ${page-1}</span>
        </div>
        `;
    }
    else
    {
        return `
        <div class="paggination__btn paggination__next"data-goto=${page+1}>
            <span class="paggination__number">Page ${page+1}</span>
            <ion-icon name="caret-forward-outline"></ion-icon>
        </div>
        `;
    }
}