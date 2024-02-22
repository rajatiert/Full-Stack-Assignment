import Animal from "../models/animalModal.js";
import mongoose from "mongoose";
import Count from "../models/count.js";

export const addAnimal = async (req, res) => {

    try {
 
  
        const count = await Count.findOne({ name: "Add" }); 
      
        const updatedCount = await Count.findByIdAndUpdate(count._id, { $inc: { count: 1 } }, { new: true });
        
        const newAnimal = req.body || null;

        if (!newAnimal || !newAnimal?.name || !newAnimal?.habitat || !newAnimal?.species || !newAnimal?.lifespan) {
            return res.status(401).json({ "msg": "Please enter valid data" });
        }

        const animal = new Animal(newAnimal);
        await animal.save();
        return res.status(200).json(animal);

    } catch (error) {
        return res.status(500).json({ "msg": error?.message });
    }

}


export const getAnimals = async (req, res) => {
    try {

        const allAnimals = await Animal.find({});
        return res.status(200).json(allAnimals);

    } catch (error) {
        return res.status(500).json({ "msg": error?.message })
    }
}


export const updateAnimal = async (req, res) => {

    try {

        const count = await Count.findOne({ name: "Update" }); 
      
        const updatedCount = await Count.findByIdAndUpdate(count._id, { $inc: { count: 1 } }, { new: true });

        const animal = req.body || null;
        if (!animal?._id) {
            return res.status(401).json({ "msg": "Bad request , Provide valid id" });
        }

        await Animal.findByIdAndUpdate(animal?._id, { ...animal });
        const updatedValue = await Animal.findById(animal?._id);

        return res.status(200).json(updatedValue);

    } catch (error) {
        return res.status(500).json({ "msg": error?.message });
    }

}