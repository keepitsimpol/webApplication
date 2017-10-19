"use strict"

function initValidation() {
	var isValid = validateForm();
	if (isValid) { alert("Signed Up successfully!"); }
	return isValid;
}

function validateForm() {
    var username = document.forms["signUp"]["username"].value;
    var password = document.forms["signUp"]["password"].value;
	return validateUsername(username) && validatePassword(password);
}

function validateUsername(username) {
	if (username == "") {
        alert("Username must be filled out");
        return false;
    } else if (username.length < 8) {
		alert("Username should have atleast 8 characters");
		return false;
	}
	return true;
}

function validatePassword(password) {
	var numberRegex = /[0-9]/i;
	if (password == "") {
        alert("Password must be filled out");
        return false;
    } else if (password.length < 8) {
		alert("Password should have atleast 8 characters");
		return false;
	} else if (password.search(numberRegex) == -1) {
		alert("Password should have atleast 1 numeral");
		return false;
	} 
	return true;
}