let products = JSON.parse(localStorage.getItem("products"));
let productID = localStorage.getItem("productId");
let itemDOM = document.querySelector(".item-details");
let productDetails = products.find( item => item.id == productID);

itemDOM.innerHTML = `<img src="${productDetails.imgUrl}" alt="samsung js">
                    <h2>${productDetails.title}</h2>
                    <p>${productDetails.desc}</p>
                   <span>Size: ${productDetails.size}</span><br>
                   
`;




