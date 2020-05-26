"use strict";
const User = require("../models").User;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const kees = await User.findOne({
      where: { name: "Kees" },
    });
    const jan = await User.findOne({
      where: { name: "Jan" },
    });

    await queryInterface.bulkInsert("TodoLists", [
      {
        name: "Kees List",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: kees.get("id"),
      },
      {
        name: "Jan List",
        createdAt: new Date(),
        updatedAt: new Date(),
        UserId: jan.get("id"),
      },
    ]);
    /*
      Add altering commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkInsert('People', [{
        name: 'John Doe',
        isBetaMember: false
      }], {});
    */
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete("TodoLists", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
