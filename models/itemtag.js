"use strict";
module.exports = (sequelize, DataTypes) => {
  const ItemTag = sequelize.define(
    "ItemTag",
    {
      TodoItemId: DataTypes.INTEGER,
      TagId: DataTypes.INTEGER,
    },
    {}
  );
  ItemTag.associate = function (models) {
    ItemTag.belongsTo(models.Tag);
    ItemTag.belongsTo(models.TodoItem);
    // associations can be defined here
  };
  return ItemTag;
};
