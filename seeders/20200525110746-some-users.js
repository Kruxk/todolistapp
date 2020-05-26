"use strict";

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Users", [
      {
        name: "Kees",
        email: "kees@nergens.nl",
        phone: 123456,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jan",
        email: "Jan@nergens.nl",
        phone: 111111,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Henk",
        email: "Henk@nergens.nl",
        phone: 22222,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jan-Kees",
        email: "jan-kees@nergens.nl",
        phone: 33333,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("Users", null, {});
  },
};
