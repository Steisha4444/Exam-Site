  
let hiden = valiform = false;
const 
    email = document.getElementById("email"),
    password = document.getElementById("password"),
    repPassword = document.getElementById("password-repeat"),
    passMsg = document.getElementById("password-msg"),
    
    validateBtn = document.getElementById("validate-login"),
    repPassMsg = document.getElementById("rep-password-msg"),
    submitBtn = document.getElementById("submit");

    
  


function inputBlur(paramInput, paramLength, msg) {
    if (paramInput.length < paramLength) {
        msg.innerHTML = "Password length must be bigger then eight.";
    }
    else{
        msg.innerHTML = "";
    }
}
function passHandler() {
    inputBlur(password.value, 8, passMsg);
}
function passRepHandler() {
    inputBlur(repPassword.value, 8, repPassMsg);
}


function validatePassword() {
    if(password.value !== repPassword.value ){
        repPassMsg.innerHTML = "Password don't match.";
    }
    else { 
        if (password.value === "")
        {
            submitBtn.setAttribute("hidden", "hidden");
            repPassMsg.innerHTML = "Enter password";
        }
        else {
            submitBtn.removeAttribute("hidden");
            repPassMsg.innerHTML = "";
        }
    }
}


password.addEventListener("blur", passHandler);
repPassword.addEventListener("blur", passRepHandler);
validateBtn.addEventListener("click", validatePassword);