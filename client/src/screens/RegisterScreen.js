// server.js
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const bcrypt = require('bcrypt');

const app = express();
app.use(bodyParser.json());

// Connect to MongoDB database
mongoose.connect('mongodb://localhost:27017/myapp', { useNewUrlParser: true, useUnifiedTopology: true });

// Define a schema for user registration
const userSchema = new mongoose.Schema({
    username: String,
    email: String,
    password: String,
    role: { type: String, enum: ['customer', 'admin'] } // Add role field
});

// Create a model based on the schema
const User = mongoose.model('User', userSchema);

// Handle POST requests to /register
app.post('/register', async (req, res) => {
    // Extract user data from the request body
    const { username, email, password, role } = req.body;

    try {
        // Hash the password before saving it to the database
        const hashedPassword = await bcrypt.hash(password, 10);
        // Create a new user document
        const newUser = new User({ username, email, password: hashedPassword, role }); // Include role in the user document
        // Save the user document to the database
        await newUser.save();
        // Send a success response
        res.status(201).json({ message: 'User registered successfully' });
    } catch (error) {
        // If an error occurs, send an error response
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

// Handle POST requests to /login
app.post('/login', async (req, res) => {
    // Extract login credentials from the request body
    const { email, password } = req.body;

    try {
        // Find the user by email
        const user = await User.findOne({ email });
        if (user) {
            // Compare the provided password with the hashed password stored in the database
            const passwordMatch = await bcrypt.compare(password, user.password);
            if (passwordMatch) {
                // If the passwords match, send a success response
                res.status(200).json({ message: 'Login successful', role: user.role });
            } else {
                // If the passwords do not match, send an error response
                res.status(401).json({ message: 'Invalid email or password' });
            }
        } else {
            // If no user with the provided email is found, send an error response
            res.status(401).json({ message: 'Invalid email or password' });
        }
    } catch (error) {
        // If an error occurs, send an error response
        console.error(error);
        res.status(500).json({ message: 'An error occurred' });
    }
});

app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
