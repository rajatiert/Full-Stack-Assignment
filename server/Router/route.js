import express from 'express';
import { addBook, getBooks, updateBook } from '../controller/bookController.js';
import { addAnimal, getAnimals, updateAnimal } from '../controller/animalController.js';


const router=express.Router();

router.get('/getAllBooks', getBooks)
router.post('/addBook' , addBook);
router.patch('/updateBook' , updateBook);

router.get('/getAllAnimals' , getAnimals)
router.post('/addAnimal', addAnimal);
router.patch('/updateAnimal',updateAnimal);

export default router;