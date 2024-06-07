// Assume the registration form has an id="registrationForm"
const registrationForm = document.getElementById("registrationForm");

registrationForm.addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent the form from submitting normally

    // Get form data
    const formData = new FormData(registrationForm);
    const username = formData.get("username");
    const email = formData.get("email");
    const password = formData.get("password");
    const userType = formData.get("userType");

    // Validate form data (you can implement your validation logic here)

    // Perform registration process (e.g., send data to server)
    // Here, we're just logging the data to console for demonstration
    console.log("Username:", username);
    console.log("Email:", email);
    console.log("Password:", password);
    console.log("User Type:", userType);

    // Optionally, you can redirect the user to another page after registration
    // window.location.href = "thank-you.html";
});
