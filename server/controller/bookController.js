import mongoose from "mongoose";
import Book from "../models/dataModal.js";
import Count from "../models/count.js";

export const addBook = async (req, res) => {
    try {
        const count = await Count.findOne({ name: "Add" }); 
      
        const updatedCount = await Count.findByIdAndUpdate(count._id, { $inc: { count: 1 } }, { new: true });

        const bookData = req.body || null;
        console.log(" req is made to add book", bookData);
        if (!bookData || !bookData?.author || !bookData?.title || !bookData.genre || !bookData.year) {
            return res.status(401).json({ "msg": "Please provide valid data format" });
        }

        const newBook = new Book(bookData);
        await newBook.save();

        return res.status(200).json(newBook);
    } catch (error) {
        return res.status(500).json({ "msg": error?.message });
    }
}


export const getBooks = async (req, res) => {

    try {

        const allBooks = await Book.find({});
        return res.status(200).json(allBooks);

    } catch (error) {
        return res.status(500).json({ "msg": error?.message });
    }

}


export const updateBook = async (req, res) => {

    try {

        const count = await Count.findOne({ name: "Update" }); 
      
        const updatedCount = await Count.findByIdAndUpdate(count._id, { $inc: { count: 1 } }, { new: true });

        const book = req.body || null;
        if (!book?._id) {
            return res.status(401).json({ "msg": "Bad request , Provide valid id" });
        }

        await Book.findByIdAndUpdate(book?._id, { ...book });
        const updatedValue = await Book.findById(book?._id);

        return res.status(200).json(updatedValue);

    } catch (error) {
        return res.status(500).json({ "msg": error?.message });
    }

}