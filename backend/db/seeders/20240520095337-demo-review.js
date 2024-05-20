'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Reviews', [
      {
        userId: 2,
        spotId: 1,
        review: 'Great place!',
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        spotId: 2,
        review: 'Not bad.',
        stars: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        spotId: 1,
        review: 'Nice spot!',
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        spotId: 2,
        review: 'Could be better.',
        stars: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        spotId: 1,
        review: 'Loved it!',
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        spotId: 2,
        review: 'Okay spot.',
        stars: 3,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        spotId: 1,
        review: 'Fantastic!',
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        spotId: 2,
        review: 'Good location.',
        stars: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        spotId: 1,
        review: 'Very clean.',
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        spotId: 2,
        review: 'Spacious.',
        stars: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        spotId: 1,
        review: 'Will visit again.',
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        spotId: 2,
        review: 'Affordable.',
        stars: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        spotId: 1,
        review: 'Highly recommended.',
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        spotId: 2,
        review: 'Quiet neighborhood.',
        stars: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        spotId: 1,
        review: 'Cozy place.',
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        spotId: 2,
        review: 'Well-maintained.',
        stars: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        spotId: 1,
        review: 'Nice view.',
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        spotId: 2,
        review: 'Good amenities.',
        stars: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 1,
        spotId: 1,
        review: 'Comfortable stay.',
        stars: 5,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        userId: 2,
        spotId: 2,
        review: 'Would recommend.',
        stars: 4,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ], options);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Reviews';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      review: { [Op.in]: ['Great place!', 'Not bad.', 'Nice spot!', 'Could be better.', 'Loved it!', 'Okay spot.', 'Fantastic!', 'Good location.', 'Very clean.', 'Spacious.', 'Will visit again.', 'Affordable.', 'Highly recommended.', 'Quiet neighborhood.', 'Cozy place.', 'Well-maintained.', 'Nice view.', 'Good amenities.', 'Comfortable stay.', 'Would recommend.'] }
    }, {});
  }
};
