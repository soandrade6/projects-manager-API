import {Router} from 'express'

const router = Router();

router.get("/tasks")
router.post("/tasks")
router.put("/tasks/:task_ide")
router.delete("/tasks/:task_id")
router.get("/tasks/:task_id")

export default router;

