// backend/routes/api/spot-images.js
const express = require('express');
const { requireAuth } = require('../../utils/auth');
const { Spot, SpotImage } = require('../../db/models');

const router = express.Router();

// add image for spot based on spotid
router.post('/:spotId/images', requireAuth, async (req, res) => {
  const { spotId } = req.params;
  const { url, preview } = req.body;
  const userId = req.user.id;

  const spot = await Spot.findByPk(spotId);

  if (!spot) {
    return res.status(404).json({ message: 'Spot couldn\'t be found' });
  }

  if (spot.ownerId !== userId) {
    return res.status(403).json({ message: 'Forbidden' });
  }

  const newImage = await SpotImage.create({
    spotId,
    url,
    preview
  });

  res.status(201).json(newImage);
});

module.exports = router;
