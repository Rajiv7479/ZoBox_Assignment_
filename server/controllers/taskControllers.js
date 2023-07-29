import Todo from "../model/task.js";

export const getAllTasks = async (req, res) => {
  const allTasks = await Todo.find();
  res.status(200).send(allTasks);
};

export const addTask = async (req, res) => {
  // await Todo.deleteMany();
  const { task } = req.body;
  if (task) {
    const todo = new Todo({ task });
    try {
      const newTodo = await todo.save();
      console.log(newTodo);
      res.send(newTodo);
    } catch (error) {
      res.send("Task not added!!!");
    }
  } else res.send("no data");
};

export const deleteTask = async (req, res) => {
  // console.log(req.params.id);
  const id = req.params.id;
  const task = await Todo.findById(id);
  try {
    if (task) {
      await Todo.deleteOne({ _id: id });
      res.send("task deleted!!");
    }
  } catch (err) {
    console.log(err, "task Not Deleted!!!!");
  }
};

export const updateTask = async (req, res) => {
  const id = req.params.id;
  const { task } = req.body;
  // console.log(id, task);
  const todo = await Todo.findById({ _id: id });
  try {
    if (todo) {
      todo.task = task;
      await todo.save();
    }
    res.send("task updated!!!");
  } catch (err) {
    console.log(err, "task not updated!!!");
  }
};
