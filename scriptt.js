// script.js
document.getElementById("sign-in-form").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission to server
    
    // Get the values of username and password fields
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    // Simple validation
    if (username === "" || password === "") {
        errorMessage.textContent = "Both fields are required.";
    } else {
        errorMessage.textContent = ""; // Clear previous error message

        // Simulate successful sign-in (in real case, you'd send this data to a server)
        if (username === "admin" && password === "password123") {
            alert("Sign-in successful!");
            window.location.href = "dashboard.html"; // Redirect to a dashboard or home page
        } else {
            errorMessage.textContent = "Invalid username or password.";
        }
    }
});
