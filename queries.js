const User = require("./models").User;
const TodoItem = require("./models").TodoItem;

async function queries() {
  try {
    const allUsers = await User.findAll().map((user) =>
      user.get({ plain: true })
    );

    const allItems = await TodoItem.findAll().map((item) =>
      item.get({ plain: true })
    );

    const userByPk = await User.findByPk(7);

    // await User.create({
    //   name: "Reinko",
    //   email: "reinko.brink@gmail.com",
    //   phone: 456789,
    // });

    const importantItems = await TodoItem.findAll({
      where: { important: true },
    }).map((item) => item.get({ plain: true }));

    console.log("ITEMS: ", allItems);
    console.log("USERS: ", allUsers);
    console.log("PK: ", userByPk);
    console.log("Important: ", importantItems);
  } catch (e) {
    console.log(e);
  }
}

queries();
