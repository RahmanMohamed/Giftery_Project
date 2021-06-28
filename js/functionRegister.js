// Button DOM
let x = document.getElementById('registerButton');
// Input DOM
let registerName = document.getElementById('exampleInputUsername');
let registerEmail = document.getElementById('exampleInputEmail');
let registerPassword = document.getElementById('exampleInputPassword');
let fillFields = document.getElementById('fillFields');
// Username validation DOM
let userNameError1 = document.getElementById('validationServer03Feedback1');
let userNameSuccess = document.getElementById('validFeedback');
// Email validation DOM
let emailError = document.getElementById('validationServer03Feedback2');
let emailSuccess = document.getElementById('validFeedbackEmail');
let emailRepeated = document.getElementById('repeatedEmail');
// Password validation DOM
let passwordError = document.getElementById('validationServer03Feedback3');
let passwordSuccess = document.getElementById('validFeedbackPassword');
// Remove help
let emailHelp = document.getElementById('emailHelp');
let usernameHelp = document.getElementById('usernameHelp');
let passwordHelp = document.getElementById('passwordHelp');


// Intializer

if (localStorage.getItem('detailLog') == null) {
    var storageArray = [];
}
else {
    var storageArray = JSON.parse(localStorage.getItem('detailLog'));
};


// REGEX
let nameVerify = new RegExp(/^[A-Z][A-Z a-z (0-9)]{6,14}$/);
let emailVerify = new RegExp(/^[^\W][^@]{0}[A-Za-z0-9 #!$%^&*()-=+_`~,></?\|]{0,64}(\@gmail|\@hotmail|\@yahoo|\@live)(\.com)$/);
let passwordVerify = new RegExp(/^(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[!@#\$%\^&\*])(?=.{8,})/);

// Sign up button
 function signUpBtn() {
    if (nameVerify.test(registerName.value) == true &&
        emailVerify.test(registerEmail.value) == true &&
        passwordVerify.test(registerPassword.value) == true
    ) {
        addToStorage();
        clearFields();
        window.location.assign('registerSuccess.html');
        x.classList.remove('Disabled');

        // add success div on keyup (addSuccess)
        // remove error div (displayError)

    }
    else {
        x.classList.add('Disabled');
    }
 
};
// Sign up button check
function signUpCheck(){
    if(replicatedEmail()==true) {
        
        registerEmail.classList.remove('is-valid');
        registerEmail.classList.add('is-invalid');

        x.classList.add('Disabled');

        emailRepeated.classList.remove('d-none');
        emailRepeated.classList.add('d-block');

        emailSuccess.classList.remove('d-block');
        emailSuccess.classList.add('d-none');

        emailHelp.classList.add('d-none');
    }
    else {
        // registerEmail.classList.add('is-valid');
        // registerEmail.classList.remove('is-invalid');

        x.classList.remove('Disabled');

        // emailSuccess.classList.add('d-block');
        // emailSuccess.classList.remove('d-none');

        emailRepeated.classList.add('d-none');
        emailRepeated.classList.remove('d-block');

        // emailHelp.classList.add('d-none');
        signUpBtn();
        fieldsEmpty();

};
// Empty Fields Error
function fieldsEmpty() {
    if (registerName.value==''||registerEmail.value==''||registerPassword.value==''){
        fillFields.classList.add('d-block');
        fillFields.classList.remove('d-none');
    }
    else {
        fillFields.classList.add('d-none');
        fillFields.classList.remove('d-block');
    }
}
};
// Replicated Email
function replicatedEmail() {
    for (i=0;i<storageArray.length;i++) {
if (registerEmail.value==storageArray[i].email) {
    return true;
    }
};
};
// Send inputs to local storage
function addToStorage() {
    inputObject = {
        name: registerName.value,
        email: registerEmail.value,
        password: registerPassword.value
    };
    storageArray.push(inputObject);
    localStorage.setItem('detailLog', JSON.stringify(storageArray));
}
// Username validation
registerName.addEventListener('blur', function () {
    if (nameVerify.test(registerName.value) == true) {
        registerName.classList.add('is-valid');
        registerName.classList.remove('is-invalid');

        userNameError1.classList.remove('d-block');
        userNameError1.classList.add('d-none');

        userNameSuccess.classList.add('d-block');
        userNameSuccess.classList.remove('d-none');

        usernameHelp.classList.add('d-none');
    }
    else if (nameVerify != true) {
        registerName.classList.remove('is-valid');
        registerName.classList.add('is-invalid');

        userNameError1.classList.remove('d-none');
        userNameError1.classList.add('d-block');

        userNameSuccess.classList.add('d-none');
        userNameSuccess.classList.remove('d-block');

        usernameHelp.classList.add('d-none');
    }
});
// Email validation
registerEmail.addEventListener('blur', function () {
    if (emailVerify.test(registerEmail.value) == true) {
        registerEmail.classList.add('is-valid');
        registerEmail.classList.remove('is-invalid');

        emailError.classList.remove('d-block');
        emailError.classList.add('d-none');

        emailSuccess.classList.add('d-block');
        emailSuccess.classList.remove('d-none');

        emailRepeated.classList.add('d-none');
        emailRepeated.classList.remove('d-block');


        emailHelp.classList.add('d-none');
    }
    else if (emailVerify != true) {
        registerEmail.classList.remove('is-valid');
        registerEmail.classList.add('is-invalid');

        emailError.classList.remove('d-none');
        emailError.classList.add('d-block');

        emailSuccess.classList.add('d-none');
        emailSuccess.classList.remove('d-block');

        emailRepeated.classList.add('d-none');
        emailRepeated.classList.remove('d-block');


        emailHelp.classList.add('d-none');
    };
});
// Password validation
registerPassword.addEventListener('blur', function () {
    if (passwordVerify.test(registerPassword.value) == true) {
        registerPassword.classList.add('is-valid');
        registerPassword.classList.remove('is-invalid');

        passwordError.classList.remove('d-block');
        passwordError.classList.add('d-none');

        passwordSuccess.classList.add('d-block');
        passwordSuccess.classList.remove('d-none');


        passwordHelp.classList.add('d-none')
        passwordHelp.classList.remove('d-block')
    }
    else if (passwordVerify != true) {
        registerPassword.classList.remove('is-valid');
        registerPassword.classList.add('is-invalid');

        passwordError.classList.remove('d-none');
        passwordError.classList.add('d-block');

        passwordSuccess.classList.add('d-none');
        passwordSuccess.classList.remove('d-block');

        passwordHelp.classList.add('d-none')
        passwordHelp.classList.remove('d-block')
    }
});
// Clear Sign up input fields
function clearFields() {
    registerName.value = "";
    registerEmail.value = "";
    registerPassword.value = "";
};

