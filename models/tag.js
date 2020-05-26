"use strict";
module.exports = (sequelize, DataTypes) => {
  const Tag = sequelize.define(
    "Tag",
    {
      title: DataTypes.STRING,
    },
    {}
  );
  Tag.associate = function (models) {
    Tag.belongsToMany(models.TodoItem, {
      through: "ItemTags",
      foreignKey: "TodoItemId",
    });
    // associations can be defined here
  };
  return Tag;
};
