import { Router } from "express";
import {
  createTask,
  deleteTask,
  getTask,
  getTasks,
  updateTask,
} from "../controllers/tasks.controllers.js";

const router = Router();

router.get("/tasks", getTasks);
router.post("/tasks", createTask);
router.put("/tasks/:task_id", updateTask);
router.delete("/tasks/:task_id", deleteTask);
router.get("/tasks/:task_id", getTask);

export default router;
