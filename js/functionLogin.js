// DOM
let loginEmail = document.getElementById('loginEmail');
let loginPassword = document.getElementById('loginPassword');
// Login validation
let loginError= document.getElementById('invalidLogin');
// Retreive array value from storage
var loginArray=JSON.parse(localStorage.getItem('detailLog'));
// Sign in Button
 function LoginBtn(){
    for(i=0;i<loginArray.length;i++){
        if (loginEmail.value == loginArray[i].email &&
            loginPassword.value == loginArray[i].password)
            {
                window.location.assign('index.html');
                loginError.classList.remove('d-block');
                loginError.classList.add('d-none');
            }
            else {
                loginError.classList.remove('d-none');
                loginError.classList.add('d-block');
            };
        };     
};
