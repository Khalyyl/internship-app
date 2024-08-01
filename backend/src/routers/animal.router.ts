import {Router} from "express";
import { sample_animals } from "../data";
import asynceHandler from "express-async-handler";
import { AnimalModel } from "../models/animal.model";


const router = Router();
router.get("/seed", asynceHandler(
    async (req, res) => {
        const animalCount = await AnimalModel.countDocuments();
        if(animalCount > 0) {
            res.send("Seed is already done!");
            return;
        }
        await AnimalModel.create(sample_animals);
        res.send("Seed is done!");
    }
))



router.get("/",asynceHandler(
    async (req, res) => {
      const animals = await AnimalModel.find();
      res.send(animals);
  }
  ))



router.get("/search/:searchTerm",asynceHandler(
    async (req, res) => {
    
      const searchRegex = new RegExp(req.params.searchTerm, 'i'); /* i is maenting case insensitive */
      const animals = await AnimalModel.find({ name: { $regex: searchRegex } });
      res.send(animals);
    }
  ))


  router.get("/:animalId", asynceHandler(
    async (req, res) => {
      const animal = await AnimalModel.findById(req.params.animalId);
      res.send(animal);
    }
  ))


export default router;