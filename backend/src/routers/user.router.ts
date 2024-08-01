import {Router} from "express";
import { sample_users } from "../data";
const router = Router();
import { UserModel } from "../models/user.model";
import asynceHandler from "express-async-handler";

router.get("/seed", asynceHandler(
  async (req, res) => {
     const usersCount = await UserModel.countDocuments();
     if(usersCount > 0) {
       res.send("Seed is already done!");
       return;
     }
     await UserModel.create(sample_users);
     res.send("Seddingple done!");
   }
 ))


 router.get("/",asynceHandler(
   async (req, res) => {
     const users = await UserModel.find();
     res.send(users);
   }
 ))


 router.get("/:userId", asynceHandler(
   async (req, res) => {
     const user = await UserModel.findById(req.params.userId);
     res.send(user);
   }    
 ))
 

 router.post("/add-user", asynceHandler(
   async (req, res) => {
     const user = await UserModel.create(req.body);
     res.send(user);
   }
 ))


 router.put("/update-user", asynceHandler(
   async (req, res) => {
     const user = await UserModel.findByIdAndUpdate(req.body._id, req.body, {
       new: true
     });
     res.send(user);
   }
 ))



  export default router;