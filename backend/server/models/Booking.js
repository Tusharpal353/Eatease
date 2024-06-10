const mongoose = require('mongoose');

const bookingSchema = new mongoose.Schema({
  name: { type: String, required: true },
  date: { type: Date, required: true },
  time: { type: String, required: true },
  phone:{ type: String,required: true},
  people: { type: Number, required: true },
});

module.exports = mongoose.model('Booking', bookingSchema);
