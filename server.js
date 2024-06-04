// server.js

const express = require('express');
const app = express();
const adminController = require('./Backend/controllers/adminController');  // Corrected path

app.get('/admin', adminController.exampleFunction);

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
});
