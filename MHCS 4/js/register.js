document.getElementById('registerForm').addEventListener('submit', function(e) {
    e.preventDefault();  // Prevents form submission (reloading page)

    const newUsername = document.getElementById('newUsername').value;
    const newPassword = document.getElementById('newPassword').value;

    console.log("Register form submitted with Username: " + newUsername + " and Password: " + newPassword);

    if (newUsername && newPassword) {
        console.log("Registration successful, redirecting to home...");
        alert("Registration successful! Redirecting to home...");
        window.location.replace("home.html");  // Redirect to home page
    } else {
        alert("Please enter both username and password.");
    }
});
