function toggleMenu() {
    var menu = document.getElementById("mobileMenu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Simulate user login
function login() {
    document.getElementById("login-btn").style.display = "none";
    document.getElementById("logout-btn").style.display = "block";

    document.getElementById("mobile-login").style.display = "none";
    document.getElementById("mobile-logout").style.display = "block";
}

// Handle logout
function logout() {
    document.getElementById("logout-btn").style.display = "none";
    document.getElementById("login-btn").style.display = "block";

    document.getElementById("mobile-login").style.display = "block";
    document.getElementById("mobile-logout").style.display = "none";

    alert("You have logged out!");
}
