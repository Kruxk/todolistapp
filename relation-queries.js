const { User, TodoItem, TodoList, Tag } = require("./models");

const listsWithUsers = async () => {
  const lists = await TodoList.findAll({
    include: [{ model: User, attributes: ["name"] }],
  });

  return lists.map((list) => list.get({ plain: true }));
};

const userByIdWithList = async () => {
  const user = await User.findByPk(5, {
    include: {
      model: TodoList,
      attributes: ["name"],
      include: { model: TodoItem, attributes: ["task"] },
    },
  });

  return user.get({ plain: true });
};

const getImportantItems = async () => {
  const importantItems = await TodoItem.findAll({
    where: { important: true },
    include: { model: TodoList, attributes: ["name"] },
  });

  return importantItems.map((item) => item.get({ plain: true }));
};

const getTodoWithTag = async () => {
  const allTodoWithTag = await TodoItem.findAll({
    include: [Tag],
  });

  return allTodoWithTag.map((item) => item.get({ plain: true }));
};

getTodoWithTag().then((items) => console.log(items.map((item) => item.Tags)));
// listsWithUsers().then((lists) => console.log("LISTS:", lists));
// userByIdWithList().then((user) => console.log("USERBYID:", user));
// getImportantItems().then((importantItems) =>
//   console.log("IMPORTANT:", importantItems)
// );
