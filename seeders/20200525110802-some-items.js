"use strict";
const TodoList = require("../models").TodoList;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const keesList = await TodoList.findOne({
      where: { name: "Kees List" },
    });
    const janList = await TodoList.findOne({
      where: { name: "Jan List" },
    });

    await queryInterface.bulkInsert("TodoItems", [
      {
        task: "learn sql",
        deadline: "30-5-2020",
        createdAt: new Date(),
        updatedAt: new Date(),
        TodoListId: keesList.get("id"),
      },
      {
        task: "learn typescript",
        deadline: "12-6-2020",
        createdAt: new Date(),
        updatedAt: new Date(),
        TodoListId: janList.get("id"),
      },
      {
        task: "have fun",
        deadline: "",
        createdAt: new Date(),
        updatedAt: new Date(),
        TodoListId: keesList.get("id"),
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
    return queryInterface.bulkDelete("TodoItems", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
