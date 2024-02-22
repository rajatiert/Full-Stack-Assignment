import mongoose from "mongoose";

const bookSchema = mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
        required: true
    },
    genre: {
        type: String,
        required: true
    },
    year : {
        type:Number,
        required:true
    }
});

const Book = mongoose.model('Book', bookSchema);

export default Book;