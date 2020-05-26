"use strict";
const Tag = require("../models").Tag;
const TodoItem = require("../models").TodoItem;

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const funTag = await Tag.findOne({
      where: { title: "Fun" },
    });
    const impTag = await Tag.findOne({
      where: { title: "Important" },
    });
    const dbTag = await Tag.findOne({
      where: { title: "DB" },
    });
    const tsTag = await Tag.findOne({
      where: { title: "TS" },
    });
    const funItem = await TodoItem.findOne({
      where: { task: "have fun" },
    });
    const sqlItem = await TodoItem.findOne({
      where: { task: "learn sql" },
    });
    const tsItem = await TodoItem.findOne({
      where: { task: "learn typescript" },
    });

    await queryInterface.bulkInsert(
      "ItemTags",
      [
        {
          TodoItemId: funItem.get("id"),
          TagId: funTag.get("id"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TodoItemId: funItem.get("id"),
          TagId: impTag.get("id"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TodoItemId: sqlItem.get("id"),
          TagId: impTag.get("id"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TodoItemId: sqlItem.get("id"),
          TagId: dbTag.get("id"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          TodoItemId: tsItem.get("id"),
          TagId: tsTag.get("id"),
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      {}
    );
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
    return queryInterface.bulkDelete("ItemTags", null, {});
    /*
      Add reverting commands here.
      Return a promise to correctly handle asynchronicity.

      Example:
      return queryInterface.bulkDelete('People', null, {});
    */
  },
};
