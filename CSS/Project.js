// Switch between Login and Register forms
function toggleForm(form) {
    document.getElementById("register-box").style.display = form === "register" ? "block" : "none";
    document.getElementById("login-box").style.display = form === "login" ? "block" : "none";
}

// Register function
function register() {
    let username = document.getElementById("reg-username").value;
    let email = document.getElementById("reg-email").value;
    let password = document.getElementById("reg-password").value;
    let confirmPassword = document.getElementById("reg-confirm-password").value;

    if (!username || !email || !password || !confirmPassword) {
        alert("All fields are required!");
        return;
    }

    if (password !== confirmPassword) {
        alert("Passwords do not match!");
        return;
    }

    if (localStorage.getItem(email)) {
        alert("Email already registered!");
        return;
    }

    let user = { username, email, password };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Registration successful! Please login.");
    toggleForm("login");
}

// Login function
function login() {
    let email = document.getElementById("login-email").value;
    let password = document.getElementById("login-password").value;

    let storedUser = localStorage.getItem(email);

    if (!storedUser) {
        alert("User not found!");
        return;
    }

    let user = JSON.parse(storedUser);
    if (user.password !== password) {
        alert("Incorrect password!");
        return;
    }

    alert("Login successful!");
    window.location.href = "Project1.html"; // Redirect to a dashboard page
}