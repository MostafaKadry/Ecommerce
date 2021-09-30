let allmyProducts = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : productsDB;
let productsDOM = document.querySelector(".products");
let myProduct = allmyProducts.filter( o => o.ismy === 'y');
let noProductsMsg = document.querySelector(".no-products-msg");

// Draw products

function drawMYProductsUI (products = []) {
    if(myProduct && myProduct.length !== 0){
         let productUI = myProduct.map( (item) => {
        return `
                    <div class="product-item"
                    style = "border : ${item.ismy === 'y' ? "2px solid green" : "2px solid black"}">

                        <img src="${item.imgUrl}" class="product-item-img" alt="${item.title}"/> 
                
                        <div class="product-item-desc">
                            <a onclick = "saveItemData(${item.id})"><h2>${item.title}</h2> </a>
                            <p>${item.desc}</p>
                            <span>Size : ${item.size}</span>
                    <button class= "edit-product-btn" onclick = editProduct(${item.id})> Edit </button> 
                    <br>
                    <button class= "edit-product-btn" onclick = deleteProduct(${item.id})> Delte </button>      
                        </div>
                    </div>`;
    });
            productsDOM.innerHTML = productUI.join("");
    } else {
        noProductsMsg.innerHTML = 'you did\'nt add any prodcut';
    }
    
}
drawMYProductsUI(myProduct);

// Edit product Fn
function editProduct (id) {
    localStorage.setItem("editproduct", id);
    window.location =  'editproduct.html';
}

// fn delete products

function deleteProduct (id) {
   let otherProducts = allmyProducts.filter(x => x.id !== id);
    localStorage.setItem("products", JSON.stringify(otherProducts));
    
   let otherMyProducts = myProduct.find( y => y.id !== id);
    drawMYProductsUI(otherMyProducts);
    window.location = 'myproducts.html';
    
let addedItemsToCart = localStorage.getItem("productsInCart") ? JSON.parse(localStorage.getItem("productsInCart")) : [];
    let otheronCart = addedItemsToCart.filter(v => v.id !== id);
    localStorage.setItem("productsInCart", JSON.stringify(otheronCart));
}




