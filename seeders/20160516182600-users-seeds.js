'use strict';

module.exports = {
  up: function (queryInterface, Sequelize) {
    var bunchOfUsers = queryInterface.bulkInsert('Users', [{
        first_name: 'Joey',
        last_name: 'Ramone',
        email: 'joey@ramones.com',
        phone: '(250) 123-4568',
        password: 'Joey123',
        createdAt: new Date(2016, 5, 10, 12, 24, 34),
        updatedAt: new Date(2016, 5, 10, 12, 24, 34)
      }, {
        first_name: 'Bob',
        last_name: 'Denver',
        email: 'bob@island.com',
        phone: '(250) 123-1264',
        password: 'Bob123',
        createdAt: new Date(2016, 5, 7, 14, 7, 14),
        updatedAt: new Date(2016, 5, 7, 14, 7, 14)
      }, {
        first_name: 'Jack',
        last_name: "O'Neil",
        email: 'Jack@sg1.com',
        phone: '(250) 122-1334',
        password: 'Jack123',
        createdAt: new Date(2016, 5, 5, 9, 34, 45),
        updatedAt: new Date(2016, 5, 5, 9, 34, 45)
      }, {
        first_name: 'Sammy',
        last_name: 'Hagar',
        email: 'sammy@cabowabo.com',
        phone: '(250) 123-4560',
        password: 'Sammy123',
        createdAt: new Date(2016, 5, 12, 9, 45, 11),
        updatedAt: new Date(2016, 5, 12, 9, 45, 11)
      }, {
        first_name: 'Doug',
        last_name: 'McKenzie',
        email: 'doug@hoser.com',
        phone: '(250) 123-4569',
        password: 'Doug123',
        createdAt: new Date(2016, 5, 11, 14, 34, 14),
        updatedAt: new Date(2016, 5, 11, 14, 34, 14)
      }],
    {});

    return bunchOfUsers;
  },

  down: function (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('Users', null, {});
  }
};
