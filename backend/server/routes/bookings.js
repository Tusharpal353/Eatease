const express = require('express');
const router = express.Router();
const Booking = require('../models/Booking');

// Create a new booking
router.post('/', async (req, res) => {
  const booking = new Booking({
    name: req.body.name,
    date: req.body.date,
    time: req.body.time,
    phone:req.body.phone,
    people: req.body.people,
  });

  try {
    const savedBooking = await booking.save();
    res.json(savedBooking);
  }
   catch (err) {
    res.status(400).json({ message: err.message });
  }
});

//fetch all booking

// Get all bookings
router.get('/fetchdata', async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

//Update Data

router.get('/:id', async (req, res) => {
  try{
       const id=req.params.id;
        const getProduct=await Booking.findById({_id:id});
        res.send(getProduct);
  }
  catch(err){
    res.status(404).send(err)
}
})

router.patch('/update/:id', async (req, res) => {
  try {
    const updatedBooking = await Booking.findByIdAndUpdate(req.params.id, req.body, { new: true });
    if (!updatedBooking) {
      return res.status(404).send({ message: 'Booking not found' });
    }
    res.send(updatedBooking);
  } catch (err) {
    res.status(500).send({ message: 'Server error' });
  }
});



module.exports = router;
