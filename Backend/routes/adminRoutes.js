// adminRoutes.js

const express = require('express');
const router = express.Router();
const adminController = require('./backend/controllers/adminController');

// Route to handle adding a new service
router.post('/services', adminController.addService);

module.exports = router;
