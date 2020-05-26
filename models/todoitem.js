"use strict";
module.exports = (sequelize, DataTypes) => {
  const TodoItem = sequelize.define(
    "TodoItem",
    {
      task: DataTypes.STRING,
      deadline: DataTypes.STRING,
      important: DataTypes.BOOLEAN,
      TodoListId: DataTypes.INTEGER,
    },
    {}
  );
  TodoItem.associate = function (models) {
    TodoItem.belongsTo(models.TodoList);
    TodoItem.belongsToMany(models.Tag, {
      through: "ItemTags",
      foreignKey: "TagId",
    });
    // associations can be defined here
  };
  return TodoItem;
};
