let productsFromLocalStorage = productsDB;
let myp = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : productsDB;

let productsDOM = document.querySelector(".products");
let drawProductUI;
// Draw products
(drawProductUI = function (products = []) {
    let productUI = products.map( (item) => {
        return `
                    <div class="product-item"
                    style = "border : ${item.ismy === 'y' ? "2px solid green" : "2px solid black"}">

                            <img src="${item.imgUrl}" class="product-item-img" alt="img1"/> 
                
                        <div class="product-item-desc">
                            <a onclick = "saveItemData(${item.id})"><h2>${item.title}</h2> </a>
                            <p>${item.desc}</p>
                            <span>Size : ${item.size}</span>
                            
                            ${item.ismy === 'y' ?  '<button class= "edit-product-btn"                             onclick = "editProduct (' +item.id +') "  > Edit </button>' : ''}  
                            
                            ${item.ismy === 'y' ?  '<button class= "edit-product-btn"                             onclick = "showallmyproducts (' +item.id +') "  > Show All My Products </button>' : ''}
                            
                        </div>
                        <div class="product-item-action">
                            <button class="add-to-cart-btn" id="addCard" onclick="addToCart(${item.id})">Add to Cart</button>
                            <i class="fas fa-heart" onclick = "addTofavourite (${item.id})" style = "color: ${item.like ? "red" : "green"}"></i>
                        </div>
                    </div>`; 
    });
    productsDOM.innerHTML = productUI.join("");
})( JSON.parse(localStorage.getItem("products")) || productsFromLocalStorage);

function addToCart (id) {
let addedItems = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
let CartProducts = document.querySelector(".carts-products .cart-selected-product");
let badge = document.querySelector(".badge");
    
    if(localStorage.getItem("username")){
        let product = myp.find( (item) => item.id === id);
        let isProductInCart = addedItems.find( (i) => i.id === id);        
        if(isProductInCart){
            isProductInCart.qty++;
            localStorage.setItem("productsInCart", JSON.stringify(addedItems));
            // UI
            CartProducts.innerHTML = "";
            addedItems.forEach( x => {
            CartProducts.innerHTML += `<p>${x.title} <span class="qty-item"> ${x.qty}</span></p>`;
            })
            }  else{
                    addedItems.push(product);
                    localStorage.setItem("productsInCart", JSON.stringify(addedItems));
                    // UI
                    CartProducts.innerHTML = "";
                    addedItems.forEach( x => {
                    CartProducts.innerHTML += `<p>${x.title} <span class="qty-item"> ${x.qty}</span></p>`;
                    })   
                    };    
        
        // add counter of items
        let cartItems = document.querySelectorAll(".carts-products div p");
        badge.style.display = 'block';
        badge.innerHTML = cartItems.length;
    } else{
        window.location = 'login.html';
    }
}


function saveItemData (id) {
    localStorage.setItem("productId", id);
    window.location = 'cartDetails.html';
}

// search fn 
let srchInpt = document.querySelector(".search");
srchInpt.addEventListener("keyup", function (e) {
    search(e.target.value, productsFromLocalStorage)
        
    if(e.target.value.trim() === ''){
        drawProductUI(myp);
    }
});
function search (title, allproducts) {
    let matchedP = allproducts.filter( (item) => item.title.toLowerCase().indexOf(title.toLowerCase()) !== -1);
    drawProductUI(matchedP);
}

// add to favourit item
let favorites = localStorage.getItem("favitems") ? JSON.parse(localStorage.getItem("favitems")) : [];
console.log("fav" , favorites);
function addTofavourite (HId) {
    
    let  i = favorites.find( x => x.id === HId);
    
    if(i) {
        let x = favorites.indexOf(i);
        favorites.splice(x, 1);
        localStorage.setItem("favitems", JSON.stringify(favorites));
        myp[HId-1].like = false;
        localStorage.setItem("products", JSON.stringify(myp));
        drawProductUI(myp);
        } else {
        myp[HId-1].like = true;
        favorites.push(myp[HId-1]);
        localStorage.setItem("favitems", JSON.stringify(favorites));
        localStorage.setItem("products", JSON.stringify(myp));
        drawProductUI(myp);
    }
} 

// filter products by size 

let sizefilter = document.getElementById("size-filter");
sizefilter.addEventListener("change", getproductsfilteredBysize);
function getproductsfilteredBysize (e) {
    let myp = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : productsDB;
    let val = e.target.value;
    if (val === 'all') {
        drawProductUI(myp);
    } else {
        let anotherPRatherthanall = myp.filter( (i) => i.size === val);
        drawProductUI(anotherPRatherthanall);
        
    }
}
// Edit product Fn
function editProduct (id) {
    localStorage.setItem("editproduct", id);
    window.location =  'editproduct.html';
}

// Show All my products

function showallmyproducts (e) {
    window.location = 'myproducts.html';
}
