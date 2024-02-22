import mongoose from "mongoose";

const animalSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    species: {
        type: String,
        required: true
    },
    habitat: {
        type: String,
        required: true
    },
    lifespan : {
        type:String,
        required:true
    }
});

const Animal = mongoose.model('Animal', animalSchema);

export default Animal;