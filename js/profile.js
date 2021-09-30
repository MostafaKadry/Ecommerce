// Get data from local storage
let usernameDB   = localStorage.getItem("username");
let useremailDB  = localStorage.getItem("email");
let userProductsCartDB  = JSON.parse(localStorage.getItem("productsInCart")) || [];
let allviewedProductsDB = JSON.parse(localStorage.getItem("products")) || productsDB;
console.log(allviewedProductsDB);
let userAddedproductsDB = allviewedProductsDB.find( (x) => x.ismy == 'y');

// Get vars
let usernameDOM  = document.getElementById("profile-username"),
    useremailDOM = document.getElementById("profile-email"),
    userCartprodLengthDOM = document.getElementById("profile-product-length"),
    userimg = document.querySelector(".profile-default-user-img");

(function profileUI () {
    usernameDOM.innerHTML = usernameDB;
    useremailDOM.innerHTML = useremailDB;
    if(userProductsCartDB.length !== 0) {
        userCartprodLengthDOM.innerHTML = `<span class="length-title">total purchases = </span> 
                                            <span class="length-title">${userProductsCartDB.length}</span>`;
    } else {userCartprodLengthDOM.remove()}
    
    const recentImgDataURL = localStorage.getItem("userimg");
        if (recentImgDataURL) {
//            userblankImg.setAttribute("src", recentImgDataURL);
            let userblankImg = `<img src="${recentImgDataURL}" id="user-uploaded-image" alt="user image" />`;
            userimg.innerHTML = userblankImg; 
        }
})();

