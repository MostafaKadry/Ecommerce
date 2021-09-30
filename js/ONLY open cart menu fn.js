// OPEN CART MENU
(function OCM(){
let CartProducts = document.querySelector(".carts-products .cart-selected-product");
let cartProductsMenu = document.querySelector("#user-info .carts-products");
let shopingCartIcon = document.querySelector("#user-info .shopping-cart");
function openCartMenu () {
   if (CartProducts.innerHTML !== "") {
        if(cartProductsMenu.style.display == 'block') {
            cartProductsMenu.style.display = 'none';
        } else {
            cartProductsMenu.style.display = 'block';
        }
   }
}
shopingCartIcon.addEventListener("click", openCartMenu);
})();
// check cart menu data
(function cartMenuData (){
let CartProducts = document.querySelector(".carts-products .cart-selected-product");
let badge = document.querySelector(".badge");
let addedItems = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
if(addedItems) {
    addedItems.map( (item) => {
      CartProducts.innerHTML += `<p>${item.title} <span class="qty-item"> ${item.qty}</span></p>`;  
    });
    
        badge.style.display = 'block';
        badge.innerHTML = addedItems.length;
}
})();