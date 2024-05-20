'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('SpotImages', [
      {
        spotId: 1,
        url: 'https://static01.nyt.com/images/2020/06/10/realestate/10IHH-Mykonos-slide-JB8Q/10IHH-Mykonos-slide-JB8Q-mediumSquareAt3X.jpg',
        preview: true
      },
      {
        spotId: 2,
        url: 'https://static01.nyt.com/images/2021/09/26/realestate/22IHH-Athens-slide-NSGE/22IHH-Athens-slide-NSGE-mediumSquareAt3X.jpg',
        preview: false
      }
    ], options);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'SpotImages';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      spotId: { [Op.in]: [1, 2] }
    }, {});
  }
};
