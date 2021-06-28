let products = [
    {
        id: 1,
        name: 'Wedding & Engagement',
        rate: 24.5,
        photo: 'images/1.jpg'
    },
    {
        id: 2,
        name: 'Housewarming',
        rate: 42,
        photo: 'images/2.jpg'
    },
    {
        id: 3,
        name: 'Baby shower',
        rate: 3.30,
        photo: 'images/3.jpg'
    },
    {
        id: 4,
        name: 'Birthday',
        rate: 105,
        photo: 'images/4.jpg'
    },
    {
        id: 5,
        name: 'Anniversary',
        rate: 77.5,
        photo: 'images/5.jpg'
    },
    {
        id: 6,
        name: 'Bar & Bat Mitzvah',
        rate: 47,
        photo: 'images/6.jpg'
    },
    {
        id: 7,
        name: 'Thank you',
        rate: 7.30,
        photo: 'images/7.jpg'
    },
    {
        id: 8,
        name: 'New pet',
        rate: 120,
        photo: 'images/8.jpg'
    }
];

products.forEach((item, _i) => {
    $('main .container').append(`
        <div class="card">
            <img src="${item.photo}" alt="${item.name}"/>
            <section>
                <span>${item.name}</span>
                <span>&#x20b5;${item.rate.toFixed(2)}</span>
            </section>
            <button type="button" class="btnAdToCart" onclick="addToCart(${item.id});">&plus;</button>
        </div>
    `);
});

let cart = localStorage.getItem('cart') ? JSON.parse(localStorage.getItem('cart')) : [];

const getIndex = id => cart.indexOf(cart.find(item => item.id === id));

const popCart = () => {
    // console.log(cart);
    if(cart.length > 0){
        $("main .callout").html(`
            <div class="row">
        `);
        cart.forEach((item, i) => {
            $("main .callout .row").append(`
                <div class="card">
                    <img src="${products[item.id - 1].photo}" alt="${products[item.id - 1].name}"/>
                    <section>
                        <span> name pro : ${products[item.id - 1].name}</span>
                        <span> Quntity : ${item.qty}</span>
                        <span> price : &#x20b5;${products[item.id - 1].rate.toFixed(2)}</span>
                    </section>
                    <section>
                        &#x20b5;${(item.qty*products[item.id - 1].rate).toFixed(2)}
                    </section>
                    <button type="button" class="btnRemoveCartItem" onclick="removeCartItem(${item.id});">&times;</button>
                </div>
            `);
        });
        $("main .callout").append(`
            </div>
            <div class="row">
                <section>
                    <div class="">
                        <small>Sub Total:</small>
                        <span class="billAmt">&#x20b5;${(cart.reduce((accu, item, i) => accu + item.qty*products[i].rate, 0)).toLocaleString('en-US', {minimumFractionDigits:2, maximumFractionDigits: 2})}</span>
                    </div>
                    <div class="">
                        <small>Total Bill:</small>
                        <span class="billAmt">&#x20b5;${(cart.reduce((accu, item, i) => accu += item.qty*products[i].rate, 0)).toLocaleString('en-US', {minimumFractionDigits: 2, maximumFractionDigits: 2})}</span>
                    </div>
                </section>
                <section>
                    <button type="button" class="btnReset" onclick="resetCart();">Clear</button>
                    <button type="button" class="btnCheckOut" onclick="checkOut();">Checkout</button>
                </section>
            </div>
        `);
    }
    else{
        $("main .callout").html(`
            <div class="alert">
                <p>Ooopppsss.....</p>
                <p>You have no items in cart!</p>
            </div>
        `);
    }
    cart.reduce((accu, item) => accu += item.qty, 0) < 1 ? $("header nav .cartCount").find("sup").css('background', 'gray').text(cart.reduce((accu, item) => accu += item.qty, 0)) : $("header nav .cartCount sup").css('background', 'red').text(cart.reduce((accu, item) => accu += item.qty, 0));
    $("main .callout .row:last-child section:first-child span#billAmt").html(`&#x20b5;${cart.reduce((accu, item) => accu += (item.qty*item.rate),0)}`);
}
popCart();

const addToCart = id => {
    if(cart.length > 0){
        getIndex(id) > -1 ? cart[getIndex(id)].qty += 1 : cart.push({id, qty: 1});
    }
    else{
        cart.push({id, qty: 1});
    }
    localStorage.setItem('cart', JSON.stringify(cart));
    popCart();
}

const removeCartItem = id => {
    getIndex(id) > -1 ? cart.splice(getIndex(id), 1) : '';
    localStorage.setItem('cart', JSON.stringify(cart));
    popCart();
}

const resetCart = () => {
    if(confirm("Empty cart?")){
        cart.splice(0, cart.length);
        localStorage.setItem('cart', JSON.stringify(cart));
        popCart();
    }
}

const checkOut = () => {
    return;
}