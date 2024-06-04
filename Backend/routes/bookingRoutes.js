const express = require('express');
const { getBookings, createBooking, updateBooking, deleteBooking } = require('../controllers/bookingController');
const router = express.Router();

router.get('/', getBookings);
router.post('/', createBooking);
router.put('/', updateBooking);
router.delete('/', deleteBooking);

module.exports = router;
