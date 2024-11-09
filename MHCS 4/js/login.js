document.getElementById('loginForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevents form submission (reloading page)
    
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;

    console.log("Login form submitted with Username: " + username + " and Password: " + password);

    if (username && password) {
        console.log("Login successful, redirecting to home...");
        alert("Login successful! Redirecting to home...");
        window.location.replace("home.html");  // Redirect to home page
    } else {
        alert("Please enter both username and password.");
    }
});
