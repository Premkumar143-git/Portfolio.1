
function toggleForm(form) {
    document.getElementById("register-box").style.display = form === "register" ? "block" : "none";
    document.getElementById("login-box").style.display = form === "login" ? "block" : "none";
}


function register() {
    let username = document.getElementById("Bhanu").value;
    let email = document.getElementById("Prem").value;
    let Phone = document.getElementById("Phone").value;
    let Date = document.getElementById("U").value;
    let password = document.getElementById("Hai").value;
    let confirmPassword = document.getElementById("Hello").value;

    if (!username || !email || !password || !confirmPassword || !Date || !Phone)  {
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

    let user = { username, email, password, Date, Phone };
    localStorage.setItem(email, JSON.stringify(user));
    alert("Registration successful! Please login.");
    toggleForm("login");
}


function login() {
    let email = document.getElementById("K").value;
    let password = document.getElementById("P").value;

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
    window.location.href="Project exe.html"
}