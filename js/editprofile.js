// Get data from local storage
let usernameDB     = localStorage.getItem("username");
let useremailDB    = localStorage.getItem("email");
let userpasswordDB = localStorage.getItem("password");

// Get vars
let usernameDOM  = document.getElementById("changeneme"),
    useremailDOM = document.getElementById("changeemail"),
    passwordDOM  = document.getElementById("changepassword"),
    submitformEdit = document.querySelector("#form-edit-profile"),
    inputUploadingIMG = document.querySelector("#imginpt"),
    printimg = document.querySelector("#profile-img-to-edit"),
    uploadimgBtn = document.getElementById("upload-img-btn");

(function editprofileUI () {
    window.onload = usernameDOM.focus();
    usernameDOM.value  = usernameDB;
    useremailDOM.value = useremailDB;
    passwordDOM.value  = userpasswordDB;
   
    submitformEdit.addEventListener("submit", sendchancheddata);
    function sendchancheddata (e) {
    e.preventDefault();
    localStorage.setItem("username", usernameDOM.value);
    localStorage.setItem("email", useremailDOM.value);
    localStorage.setItem("password", passwordDOM.value);
    window.location = 'profile.html';
}
   uploadimgBtn.onclick = function () {
       window.location = 'editprofile.html';
   }
    
    inputUploadingIMG.addEventListener('change', uploadProfileImgfn);
    
    function uploadProfileImgfn () {
        const reader = new FileReader();
        
        reader.addEventListener('load', function() {
            localStorage.setItem("userimg", reader.result);
        });
        
        reader.readAsDataURL(this.files[0]);
    }
        const recentImgDataURL = localStorage.getItem("userimg");
        if (recentImgDataURL) {
            printimg.setAttribute("src", recentImgDataURL);
        }
   
})();

