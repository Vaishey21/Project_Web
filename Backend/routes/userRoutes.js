// userRoutes.js
const asyncHandler = require('express-async-handler');
const { authUser, registerUser, getUserProfile } = require('../controllers/userController');
const router = require('express').Router();

router.post('/login', asyncHandler(authUser));
router.post('/', asyncHandler(registerUser));
router.get('/profile', asyncHandler(getUserProfile));

module.exports = router;
