const express = require("express");
const app = express();
const port = process.env.PORT || 4000;
const cors = require("cors");

const { User, TodoList } = require("./models");

app.use(cors());
app.use(express.json());

app.get("/users/:userId/lists", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const user = await User.findByPk(userId, {
      include: [TodoList],
    });

    if (user) {
      if (user.TodoLists.length === 0) {
        res.status(404).send("This user has no lists yet");
      } else {
        res.send(user.TodoLists);
      }
    } else {
      res.status(404).send("User not found");
    }
  } catch (e) {
    next(e);
  }
});

app.get("/users/:userId", async (req, res, next) => {
  try {
    const id = parseInt(req.params.userId);
    const userById = await User.findByPk(id);

    if (!userById) {
      res.status(404).send("User not found");
    } else {
      res.json(userById);
    }
  } catch (e) {
    next(e);
  }
});

app.put("/users/:userId", async (req, res, next) => {
  try {
    const userId = parseInt(req.params.userId);
    const userToUpdate = await User.findByPk(userId);
    if (!userToUpdate) {
      res.status(404).send("User not found");
    } else {
      const updatedUser = await userToUpdate.update(req.body);
      res.json(updatedUser);
    }
  } catch (e) {
    next(e);
  }
});

app.post("/users", async (req, res, next) => {
  try {
    const email = req.body.email;
    if (!email || email === " ") {
      res.status(400).send("Must provide an email adress");
    } else {
      const user = await User.create(req.body);
      res.json(user);
    }
  } catch (e) {
    next(e);
  }
});

app.put("/todoLists/:listId", async (req, res, next) => {
  try {
    const id = parseInt(req.params.listId);
    const listToUpdate = await TodoList.findByPk(id);
    if (!listToUpdate) {
      res.status(404).send("List not found");
    } else {
      const updatedList = await listToUpdate.update(req.body);
      res.json(updatedList);
    }
  } catch (e) {
    next(e);
  }
});

app.get("/todoLists", async (req, res, next) => {
  try {
    const todoLists = await TodoList.findAll();
    res.json(todoLists);
  } catch (e) {
    next(e);
  }
});

app.post("/todoLists", async (req, res, next) => {
  try {
    const userId = req.body.UserId;
    const doesUserExist = await User.findByPk(userId);

    if (!doesUserExist) {
      res
        .status(404)
        .send("Must provide a valid user Id, call it with UserId=");
    } else {
      const todoList = await TodoList.create(req.body);
      res.json(todoList);
    }
  } catch (e) {
    next(e);
  }
});

app.listen(port, () => {
  console.log("listening on port:", port);
});
