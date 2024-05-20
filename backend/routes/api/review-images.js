// backend/routes/api/review-images.js
const express = require('express');
const { requireAuth } = require('../../utils/auth');
const { Review, ReviewImage } = require('../../db/models');

const router = express.Router();

//add image to review based on review id
router.post('/:reviewId/images', requireAuth, async (req, res) => {
  const { reviewId } = req.params;
  const { url } = req.body;
  const userId = req.user.id;

  const review = await Review.findByPk(reviewId);

  if (!review) {
    return res.status(404).json({ message: 'Review couldn\'t be found' });
  }

  if (review.userId !== userId) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const imageCount = await ReviewImage.count({ where: { reviewId } });

  if (imageCount >= 10) {
    return res.status(403).json({ message: 'Maximum number of images for this resource was reached' });
  }

  const newImage = await ReviewImage.create({
    reviewId,
    url
  });

  res.status(201).json(newImage);
});

module.exports = router;
