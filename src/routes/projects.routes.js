import { Router } from "express";
import {
  getProjects,
  createProject,
  updateProject,
  deleteProject,
  getProject,
} from "../controllers/projects.controllers.js";

const router = Router();

router.get("/projects", getProjects);
router.post("/projects", createProject);
router.put("/projects/:project_id", updateProject);
router.delete("/projects/:project_id", deleteProject);
router.get("/projects/:project_id", getProject); //To obtain an especific project

export default router;
