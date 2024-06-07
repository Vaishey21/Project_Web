<?php
if ($_SERVER["REQUEST_METHOD"] == "POST") {
    // Retrieve form data
    $username = $_POST["username"];
    $email = $_POST["email"];
    $password = $_POST["password"];
    $role = $_POST["role"];

    // Perform validation and registration process
    // Here you would typically connect to your database and insert the user data
    // For demonstration purposes, we'll simply print the received data
    echo "Registration Successful!<br>";
    echo "Username: " . $username . "<br>";
    echo "Email: " . $email . "<br>";
    echo "Password: " . $password . "<br>";
    echo "Role: " . $role;
}
?>
