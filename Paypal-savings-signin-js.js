document.addEventListener("DOMContentLoaded", function () {
    document.querySelector(".login-form").addEventListener("submit", function (event) {
        event.preventDefault();
        alert("Login button clicked! Implement authentication logic here.");
    });

    document.querySelector(".signup-btn").addEventListener("click", function () {
        alert("Sign-up button clicked! Redirect to sign-up page.");
    });
});

// Define valid users and their corresponding home pages
const users = {
  "mydearworld@gmail.com": {
    password: "12345savings",
    homepage: "Paypal-savings-home.html" // <-- Replace with actual path
  },
  "user2@example.com": {
    password: "password2",
    homepage: "user2-home.html" // <-- Replace with actual path
  },
  "admin@paypal.com": {
    password: "admin123",
    homepage: "admin-dashboard.html" // <-- Replace with actual path
  }
};

// Handle form submission
document.querySelector(".login-form").addEventListener("submit", function (e) {
  e.preventDefault(); // Prevent form from submitting normally

  const email = this.querySelector("input[type='text']").value.trim();
  const password = this.querySelector("input[type='password']").value.trim();

  // Check credentials
  if (users[email] && users[email].password === password) {
    // Store login state
    sessionStorage.setItem("isLoggedIn", "true");
    sessionStorage.setItem("currentUser", email);

    // Redirect to user's homepage
    window.location.href = users[email].homepage;
  } else {
    alert("Invalid username or password.");
  }
});
