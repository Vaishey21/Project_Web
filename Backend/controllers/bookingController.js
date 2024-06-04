const Booking = require('../models/bookingModel');

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find({ userId: req.user.id });
    res.status(200).json(bookings);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.createBooking = async (req, res) => {
  const { date } = req.body;
  try {
    const newBooking = new Booking({ userId: req.user.id, date });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.updateBooking = async (req, res) => {
  const { id, status } = req.body;
  try {
    const booking = await Booking.findById(id);
    if (!booking) {
      return res.status(404).json({ message: 'Booking not found' });
    }
    booking.status = status;
    await booking.save();
    res.status(200).json(booking);
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};

exports.deleteBooking = async (req, res) => {
  const { id } = req.body;
  try {
    await Booking.findByIdAndDelete(id);
    res.status(200).json({ message: 'Booking deleted successfully' });
  } catch (err) {
    res.status(500).json({ message: 'Server error' });
  }
};
