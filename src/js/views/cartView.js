export let renderHeader = () =>
{
    let markup =
    `
        <h2 class="heading__secondary">Shopping Cart</h2>
    `;
    document.querySelector(".cart__page--js").insertAdjacentHTML("afterbegin", markup);
}

let totalPrice=0;
export let renderProduct = (product) =>
{
    // const count = new URLSearchParams(location.href.split('?')[1]).get('quantity');
    // let count = Math.floor(Math.random()*6) + 1;
    let count = 1;
    // console.log(count)

    totalPrice += count * product.price;

    const markup =
    `
    <div class="cart__item" data-itemid = ${product.id}>
        <img src="${product.image}" alt="${product.name}" class="cart__item--photo">
        <div class="cart__item--details">
            <div class="cart__item--details-item cart__item--details-item-1">
                <div class="cart__item--key">${product.name}</div>
                <p class="cart__item--value">
                ${limitDescription(product.description)}
                </p>
            </div>
            <div class="cart__item--details-item">
                <div class="cart__item--key">Price</div>
                <div class="cart__item--value">${product.price}</div>
            </div>
            <div class="cart__item--details-item">
                <div class="cart__item--key">Quantity</div>
                <div class="cart__item--value">${count}</div>
            </div>
            <div class="cart__item--details-item">
                <div class="cart__item--key">Total</div>
                <div class="cart__item--value cart__item--value-total">${count * product.price}$</div>
            </div>
            <div class="cart__item--details-item">
                <div class="cart__item--key">&nbsp;</div>
                <div class="cart__item--value cart__item--delete">&cross;</div>
            </div>
        </div>        
    </div>
    <hr>
    `;

    document.querySelector(".cart__page--js").insertAdjacentHTML("beforeend", markup);
}

const limitDescription = (desc, limit = 100) =>
{
    if(desc.length > limit)
    {
        return desc.substring(0, limit) + " ...";
    }
    else if(desc.length < 100)
    {
        return desc + `
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
            \xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0\xa0
        `;
    }
    // return desc;
}

export const renderCartTotalButtons = (oneProductTotalPrice) =>
{
    totalPrice -= oneProductTotalPrice;
    let markup =
    `
        <div class="cart__total">
            <div class="cart__total__typo">
                <div class="cart__total__typo--text">Total price: </div>
                <div class="cart__total__typo--value">${totalPrice}$</div>
            </div>

            <div class="cart__total--buttons">
                <div class="btn btn--white">Update</div>
                <div class="btn btn--red cart__checkout--js">Checkout</div>
            </div>
        </div>
    `;
    document.querySelector(".cart__page--js .cart__total").innerHTML="";
    document.querySelector(".cart__page--js").insertAdjacentHTML("beforeend", markup);
}

export const deleteItem = id =>
{
    const item = document.querySelector(`[data-itemid="${id}"]`);
    item.nextElementSibling.remove(); // "hr" element
    item.remove();
}

export const deleteButtons = () =>
{
    const item = document.querySelector(".cart__total");
    item.remove();
}