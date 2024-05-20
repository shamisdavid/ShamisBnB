'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Bookings', [
      {
        spotId: 1,
        userId: 2,
        startDate: '2022-01-01',
        endDate: '2022-01-07'
      },
      {
        spotId: 2,
        userId: 1,
        startDate: '2022-02-01',
        endDate: '2022-02-07'
      }
    ], options);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Bookings';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      userId: { [Op.in]: [1, 2] }
    }, {});
  }
};
