let productsDOMfav = document.querySelector(".products");
let noProductsMsg = document.querySelector(".no-products-msg");

function drawfavourtesProductsUI (allProducts = []) {
   
    let products = JSON.parse(localStorage.getItem("favitems")) || allProducts;
    let productUI = products.map( (item) => {
        return `
                    <div class="product-item">
                        <img src="${item.imgUrl}" class="product-item-img" alt="img1"/>

                        <div class="product-item-desc">
                            <h2>${item.title}</h2>
                            <p>${item.desc}</p>
                            <span>Size : ${item.size}</span><br>
                            
                        </div>
                        <div class="product-item-action">
                            <button class="add-to-cart-btn" id="addCard" onclick="removeItemFromfav(${item.id})">Remove From Favourit</button>
                        </div>
                    </div>
`;
    });
    productsDOMfav.innerHTML = productUI.join("");
}
drawfavourtesProductsUI();
 

// remove items in fav fn 
function removeItemFromfav (id) {
        let productsinfav = localStorage.getItem("favitems")
        if (productsinfav) {
            let items = JSON.parse(productsinfav);
            let filteredItems = items.filter( (x) => x.id !== id);
            localStorage.setItem("favitems", JSON.stringify(filteredItems));
            drawfavourtesProductsUI(filteredItems);
    }
}

function CartCounter(){
let CartProducts = document.querySelector(".carts-products .cart-selected-product");
let badge = document.querySelector(".badge");
let shopingCartIcon = document.querySelector("#user-info .shopping-cart");
let cartProductsMenu = document.querySelector("#user-info .carts-products");
let addedItems = localStorage.getItem("favitems") ? JSON.parse(localStorage.getItem("favitems")) : []
if(addedItems) {
    addedItems.map( (item) => {
      CartProducts.innerHTML += `<p>${item.title}</p>`;  
    });
        
        badge.style.display = 'block';
        badge.innerHTML = addedItems.length;
   }
    if(addedItems.length === 0)
    noProductsMsg.innerHTML = "sorry there is no items to show";
    
}
CartCounter();







