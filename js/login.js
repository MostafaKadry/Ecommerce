let username = document.querySelector("#username"),
    password = document.querySelector("#password"),
    signIn   = document.querySelector("#signin");

let getuser = localStorage.getItem("username");
let getpassword = localStorage.getItem("password");

signIn.addEventListener("click", login);

function login (e){
            e.preventDefault();
    if(username.value === "" || password.value === ""){
        alert("PLZ type your sign in data");
    } else{
        if( 
           (getuser && getuser.trim() === username.value.trim()) && 
           (getpassword && getpassword === password.value )
          ){
            setTimeout( () => {
               window.location = "index.html"; 
            },1500)
        } else{
            alert("not pass")
        }
    }
}
