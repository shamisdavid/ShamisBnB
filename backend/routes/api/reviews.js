const express = require('express');
const { requireAuth } = require('../../utils/auth');
const { Review, Spot } = require('../../db/models');
const { check } = require('express-validator');
const { handleValidationErrors } = require('../../utils/validation');

const router = express.Router();

const validateReview = [
  check('review')
    .exists({ checkFalsy: true })
    .notEmpty()
    .withMessage('Review text is required'),
  check('stars')
    .exists({ checkFalsy: true })
    .isInt({ min: 1, max: 5 })
    .withMessage('Stars must be an integer from 1 to 5'),
  handleValidationErrors
];

//create review for spot based on the spot's id
router.post('/:spotId/reviews', requireAuth, validateReview, async (req, res) => {
  const { spotId } = req.params;
  const { review, stars } = req.body;
  const userId = req.user.id;

  const spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({ message: 'Spot couldn\'t be found' });
  }

  const existingReview = await Review.findOne({
    where: {
      spotId,
      userId
    }
  });

  if (existingReview) {
    return res.status(403).json({ message: 'User already has a review for this spot' });
  }

  const newReview = await Review.create({
    userId,
    spotId,
    review,
    stars
  });

  res.status(201).json(newReview);
});

module.exports = router;
