function login() {
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;

    if (username === "admin" && password === "12345") {
       localStorage.setItem("loggedInuser", username);
        alert("Login Successful!");
        window.location.href = "welcome.html";
    } else {
        alert("Invalid username or password!");
    }
}