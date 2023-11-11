function validateReg(){
    const username = document.getElementById('username').value;
    const email = document.getElementById('email').value;
    const pass = document.getElementById('password').value;
    const pass2 = document.getElementById('confirmPass').value;
    
    //Check registration validation rules
    
    //check if username is empty
    if (username === ''){
        alert('username is required!');
    }
        
    //Check if username is between 3-15 characters
    if (username.length < 3 || username.length > 15) {
        alert("Username must be between 3 and 15 characters.");
        return;
    }

    //check if username is unique
    if (isUsernameTaken(username)) {
        alert("Username is already taken. Please choose a different one.");
        return;
    }

    //check if email address is valid
    if(email.length === 0 || !isValidEmail(email)){
        alert("Please enter a valid email address.");
        return;
    }

    //check if email is unique
    if (isEmailTaken(email)) {
        alert("Email is already taken. Please use a different one.");
        return;
    }

    //check if password is between 8 and 20 characters
    if (pass.length < 8 || pass.length > 20) {
        alert("Password must be between 8 and 20 characters.");
        return;
    }

    //check if password matched
    if (pass === pass2) {
        //save data to local storage
        localStorage.setItem('username', username);
        localStorage.setItem('email', email);
        localStorage.setItem('confirmPass', pass2);
    
        alert("Registration successful!");
    }else{
        alert('password do not match');
        return;
    }
}
function validateLogin() {
    const storedEmail = localStorage.getItem('email');
    const storedPassword = localStorage.getItem('confirmPass');
    const username = localStorage.getItem('username');
    const email2 = document.getElementById('loginEmail').value; // Get the value of the input
    const validatePass = document.getElementById('loginPass').value; // Get the value of the input

    // Check login validation rules
    if (email2 === '' || validatePass === '') {
        alert("Please enter email or password");
        return;
    } else if (email2 !== storedEmail || validatePass !== storedPassword) {
        alert("Invalid email or password.");
        return;
    } else {
        alert("Welcome, " + username + "!");
    }
}

function isValidEmail(email) {
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
}
function isUsernameTaken(username) {
    // Check if the username already exists in localStorage
    const storedUsername = localStorage.getItem('username');
    return storedUsername === username;
}

function isEmailTaken(email) {
    // Check if the email already exists in localStorage
    const storedEmail = localStorage.getItem('email');
    return storedEmail === email;
}