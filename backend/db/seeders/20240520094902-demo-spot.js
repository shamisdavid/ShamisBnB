'use strict';

let options = {};
if (process.env.NODE_ENV === 'production') {
  options.schema = process.env.SCHEMA;  // define your schema in options object
}

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('Spots', [
      {
        ownerId: 1,
        address: '123 Demo Street',
        city: 'Demoville',
        state: 'Demostate',
        country: 'Demoland',
        lat: 37.7749,
        lng: -122.4194,
        name: 'Demo Spot 1',
        description: 'This is a demo spot.',
        price: 100
      },
      {
        ownerId: 2,
        address: '456 Fake Avenue',
        city: 'Faketown',
        state: 'Fakestate',
        country: 'Fakeland',
        lat: 40.7128,
        lng: -74.0060,
        name: 'Fake Spot 2',
        description: 'This is a fake spot.',
        price: 200
      }
    ], options);
  },

  async down(queryInterface, Sequelize) {
    options.tableName = 'Spots';
    const Op = Sequelize.Op;
    return queryInterface.bulkDelete(options, {
      name: { [Op.in]: ['Demo Spot 1', 'Fake Spot 2'] }
    }, {});
  }
};
