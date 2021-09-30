let username = document.querySelector("#username"),
    email = document.querySelector("#email"),
    password = document.querySelector("#password"),
    singUpBtn = document.querySelector("#sing-up");
singUpBtn.addEventListener("click", signIn)
 
function signIn (e){
    e.preventDefault();
    if(username.value === "" || email.value === "" || password.value === ""){
        alert("PLZ Fill data");
    } else{
        localStorage.setItem("username", username.value);
        localStorage.setItem("email", email.value);
        localStorage.setItem("password", password.value);
        setTimeout( () => {
            window.location = "login.html";
        }, 1500);
    }
}