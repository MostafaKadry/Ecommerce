let productsDOMCART = document.querySelector(".products");
let noProductsMsg = document.querySelector(".no-products-msg");
let productsinCart = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
function drawCartProductsUI (allProducts = []) {
   
    let products = JSON.parse(localStorage.getItem("productsInCart")) || [];
    let productUI = products.map( (item) => {
        return `
                    <div class="product-item-in-my-cart">
                        <img src="${item.imgUrl}" class="product-item-img" alt="img1"/>

                        <div class="product-item-desc">
                            <h2 class="item-title">${item.title}</h2>
                            <p class="item-desc">${item.desc}</p>
                            <span class="item-size">Size : ${item.size}</span><br>
                            <span class="item-qty">Quantity: ${item.qty}</span>
                        <span class="up-down-arrow-icon">
                            <i class="fas fa-caret-up" onclick="up (${item.id})"></i>
                            <i class="fas fa-caret-down" onclick="down (${item.id})"></i>
                        </span>                        
                        </div>
                        <div class="product-item-action">
                            <button class="remove-from-cart-btn" id="addCard" onclick="removeItemFromCart(${item.id})">Remove From Cart</button>
                        </div>
                    </div>
`;
    });
    productsDOMCART.innerHTML = productUI.join("");
}
window.onload = drawCartProductsUI();

function removeItemFromCart (id) {
    let productsinCart = localStorage.getItem("productsInCart");
        if (productsinCart) {
        let items = JSON.parse(productsinCart);
        let filteredItems = items.filter( (x) => x.id !== id);
        localStorage.setItem("productsInCart", JSON.stringify(filteredItems));
        drawCartProductsUI(filteredItems);
        CartCounter();
    }
}

function CartCounter(){
let CartProducts = document.querySelector(".carts-products .cart-selected-product");
let badge = document.querySelector(".badge");
let shopingCartIcon = document.querySelector("#user-info .shopping-cart");
let cartProductsMenu = document.querySelector("#user-info .carts-products");
let addedItems = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
if(addedItems) {
     CartProducts.innerHTML = "";  
    addedItems.map((item) => {
      CartProducts.innerHTML += `<p>name: ${item.title}  ,qty: <span class="qty-item">${item.qty}</span></p>`;  
    });
        
        badge.style.display = 'block';
        badge.style.backgroundColor = 'red';
        badge.innerHTML = addedItems.length;
   }
    if(addedItems.length === 0)
    noProductsMsg.innerHTML = "<span>sorry there is no items to show </span>";
    
}
CartCounter();

function up (id) {
let productsinCart = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
    let wantup = productsinCart.find( x => x.id === id);
    wantup.qty++;
    localStorage.setItem("productsInCart", JSON.stringify(productsinCart));
    CartCounter();
    drawCartProductsUI();
}
function down (id) {
    let productsinCart = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
    let wantdown = productsinCart.find( x => x.id === id);
    if (wantdown.qty > 0) {
        wantdown.qty--;
        localStorage.setItem("productsInCart", JSON.stringify(productsinCart));
        CartCounter();
        drawCartProductsUI();
    } 
    if (wantdown.qty == 0) {
        removeItemFromCart(id);
    }
}




