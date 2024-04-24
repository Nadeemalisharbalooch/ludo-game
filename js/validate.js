function validateForm() {
    var firstName = document.querySelector('#firstName').value.trim();
    var lastName = document.querySelector('#lastName').value.trim();
    var username = document.querySelector('#username').value.trim();
    var phoneNumber = document.querySelector('#phoneNumber').value.trim();
    var city = document.querySelector('#city').value.trim();
    var email = document.querySelector('#email').value.trim();
    var isValid = true;

    // Validation for First Name
    var firstNameRegex = /^[a-zA-Z][a-zA-Z\s'`-]{0,18}[a-zA-Z]$/;
    if (!firstNameRegex.test(firstName)) {
        document.querySelector('#firstNameError').innerText = 'Invalid first name format';
        isValid = false;
    } else {
        document.querySelector('#firstNameError').innerText = '';
    }
    // Validation for Last Name
    var lastNameRegex = /^[a-zA-Z][a-zA-Z\s'`-]{0,28}[a-zA-Z]$/;
    if (!lastNameRegex.test(lastName)) {
        document.querySelector('#lastNameError').innerText = 'Invalid last name format';
        isValid = false;
    } else {
        document.querySelector('#lastNameError').innerText = '';
    }

    // Validation for Username
    var usernameRegex = /^[A-Z][a-z]{3}\d{1}$/;
    if (!usernameRegex.test(username)) {
        document.querySelector('#usernameError').innerText = 'Invalid username format';
        isValid = false;
    } else {
        document.querySelector('#usernameError').innerText = '';
    }

    // Validation for Phone Number
    var phoneNumberRegex = /^\(\d{3}\) \d{3}-\d{4}$/;
    if (!phoneNumberRegex.test(phoneNumber)) {
        document.querySelector('#phoneNumberError').innerText = 'Invalid phone number format';
        isValid = false;
    } else {
        document.querySelector('#phoneNumberError').innerText = '';
    }

    // Validation for City
    var cityRegex = /^[a-zA-Z\s]{0,42}$/;
    if (!cityRegex.test(city)) {
        document.querySelector('#cityError').innerText = 'Invalid city format';
        isValid = false;
    } else {
        document.querySelector('#cityError').innerText = '';
    }

    // Validation for Email Address
    var emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9_-]+\.(ca|org)$/;
    if (!emailRegex.test(email)) {
        document.querySelector('#emailError').innerText = 'Invalid email format';
        isValid = false;
    } else {
        document.querySelector('#emailError').innerText = '';
    }

    return isValid;
}