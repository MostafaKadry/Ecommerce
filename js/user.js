let userInfo = document.querySelector("#user-info"),
    userDom = document.querySelector("#user"),
    links = document.querySelector("#links");
let username = localStorage.getItem("username");
let logout = document.querySelector("#logout");
if(username){
    links.remove();
    userInfo.style.display = "flex";
    userDom.innerHTML = username;
}
logout.addEventListener("click", () => {
    localStorage.clear();
    setTimeout( ()=> {
        window.location = "register.html";
    }, 1500)
})
