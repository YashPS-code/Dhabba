let signinFn = function() {
    document.getElementById("sgn").innerText = "Log In";
    document.getElementById("signInDiv").style.visibility = "visible";
};

let exit = function() {
    document.getElementById("signInDiv").style.visibility = "hidden";
    document.getElementById("signUpDiv").style.visibility = "hidden";
};

let signupFn = function() {
    document.getElementById("sgn").innerText = "Sign Up";
    document.getElementById("signUpDiv").style.visibility = "visible";
};
