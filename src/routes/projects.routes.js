import { Router } from "express";

const router = Router();

router.get("/projects");
router.post("/projects");
router.put("/projects/:id");
router.delete("/projects/:id");
router.get("/projects/:id"); //To obtain an especific project

export default router;