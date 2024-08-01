import {Router} from "express";
const router = Router();
import asynceHandler from "express-async-handler";
import { TaskModel } from "../models/task.model";


router.get("/seed", asynceHandler(
    async (req, res) => {
         const tasksCount = await TaskModel.countDocuments();
         if(tasksCount > 0) {
             res.send("Seed is already done!");
             return;
         }
         await TaskModel.create([]);
         res.send("Seddingple done!");
     }
))

router.get("/",asynceHandler(
    async (req, res) => {
      const tasks = await TaskModel.find();
      res.send(tasks);
  }
))



router.delete("/:taskId", asynceHandler(
    async (req, res) => {
        const task = await TaskModel.findByIdAndDelete(req.params.taskId);
        res.send(task);
    }
))