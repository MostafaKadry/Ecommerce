let productName = document.getElementById("product-name"),
    productDesc = document.getElementById("product-desc"),
    productSizeSelect = document.getElementById("product-size"),
    productForm = document.getElementById("form-creat-product"),
    uploadImg   = document.getElementById("upload-img"),
    productImg;
let productSizeValue;


// Events
productSizeSelect.addEventListener("change", getProductSizeValue);
productForm.addEventListener("submit", createProductFn);
uploadImg.addEventListener("change", uploadImgFn);

// Functions

// [1] get product val
function getProductSizeValue (e) {
    productSizeValue = e.target.value;
}
// [2] create pro fn
function createProductFn (e) {
    e.preventDefault();
    let allProduct = JSON.parse(localStorage.getItem("products")) || productsDB;
    let nameValue = productName.value;
    let descValue = productDesc.value;
    let sizeValue = productSizeSelect.value;
    if(nameValue && descValue && sizeValue) {
                let obj = {
            id     : allProduct.length +1,
            imgUrl : productImg,
            size   : productSizeValue,
            title  : nameValue,
            qty    : 1,
            desc   : descValue,
            ismy   : 'y'
        }
        let newProducts = [...allProduct, obj];
        localStorage.setItem("products", JSON.stringify(newProducts));

        productName.value = '';
        productDesc.value = '';
        productSizeSelect.value = '';
        
        setTimeout( () => {
            window.location = "index.html";
            alert("Congratulation!! your new product has  been successfuly added to our ecommerece website");
            
        },500)
    } else {
        alert("you shold type any thing don't be lazy")
    }
}
// [3] upload Img Fn

function uploadImgFn () {
    let x = this.files[0];
    console.log(x);
    let correctType = ["image/png", "image/jpeg"]
    if (correctType.indexOf(x.type) == -1){
        alert("type of img is not supported");
        return;
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

    







