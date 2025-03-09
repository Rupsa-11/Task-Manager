import { createTask,deleteTask,updateTask,getMyTask,getSingleTask } from "../controller/taskController";
import express from 'express';

const router = express.Router();

router.post("/post",createTask);
router.delete("/post",deleteTask);
router.put("/update/:id",updateTask);
router.get("/myTask",getMyTask);
router.get("/single/:id",getSingleTask);

export default router;