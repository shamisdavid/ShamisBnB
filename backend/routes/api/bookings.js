// backend/routes/api/bookings.js
const express = require('express');
const { requireAuth } = require('../../utils/auth');
const { Booking, Spot } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateBooking = [
  check('startDate')
    .exists({ checkFalsy: true })
    .isDate()
    .withMessage('startDate is required'),
  check('endDate')
    .exists({ checkFalsy: true })
    .isDate()
    .withMessage('endDate is required'),
  handleValidationErrors
];

//create booking from spot based on thespot's id
router.post('/:spotId/bookings', requireAuth, validateBooking, async (req, res) => {
  const { spotId } = req.params;
  const { startDate, endDate } = req.body;
  const userId = req.user.id;

  const spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({ message: 'Spot couldn\'t be found' });
  }

  if (spot.ownerId === userId) {
    return res.status(403).json({ message: 'Cannot book your own spot' });
  }

  const newBooking = await Booking.create({
    userId,
    spotId,
    startDate,
    endDate
  });

  res.status(201).json(newBooking);
});

module.exports = router;
