// vars
let myp = localStorage.getItem("products") ? JSON.parse(localStorage.getItem("products")) : productsDB;
let productId = JSON.parse(localStorage.getItem("editproduct"));
let getProduct = myp.find( x => x.id === productId);

let productName = document.getElementById("product-name"),
    productDesc = document.getElementById("product-desc"),
    productSizeSelect = document.getElementById("product-size"),
    updateForm = document.getElementById("update-form"),
    uploadImg   = document.getElementById("upload-img"),
    productImg;
let productSizeValue;

// change vars
productName.value       = getProduct.title;
productDesc.value       = getProduct.desc;
productSizeSelect.value = getProduct.size; 
productImg              = getProduct.imgUrl;
// Events
productSizeSelect.addEventListener("change", getProductSizeValue);
updateForm.addEventListener("submit", updateProductFn);
uploadImg.addEventListener("change", uploadImgFn);

// Functions

// [1] get product val
function getProductSizeValue (e) {
    productSizeValue = e.target.value;
}
// [2] create pro fn
function updateProductFn (e) {
    e.preventDefault();
    getProduct.title = productName.value;
    getProduct.desc = productDesc.value;
    getProduct.size = productSizeSelect.value;
    getProduct.imgUrl = productImg;
    localStorage.setItem("products", JSON.stringify(myp));
    
    setTimeout(() => {
        window.location = 'index.html';
    }, 500);
}
// [3] upload Img Fn

function uploadImgFn () {
    let x = this.files[0];
    console.log(x);
    let correctType = ["image/png", "image/jpeg"]
    if (correctType.indexOf(x.type) == -1){
        alert("type of img is not supported");
    } 
    if (x.size > 2 * 1024 * 1024) {
            alert("your product's Image must not exceed 2 mg");
        return;
       }
    getImageBased64(x);
//    productImg = URL.createObjectURL(x);
function getImageBased64 () {
        let reader = new FileReader();    
        
        reader.readAsDataURL(x);
        
        reader.onload = function () {
            productImg = reader.result;
        }
        reader.onerror = function () {
            alert("error from img link");
        }
}
}

    







