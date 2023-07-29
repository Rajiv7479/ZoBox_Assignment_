import express from "express";
import {
  addTask,
  deleteTask,
  getAllTasks,
  updateTask,
} from "../controllers/taskControllers.js";
const router = express.Router();

router.get("/todos", getAllTasks);
router.post("/todos", addTask);
router.delete("/todos/:id", deleteTask);
router.put("/todos/:id", updateTask);
export default router;
