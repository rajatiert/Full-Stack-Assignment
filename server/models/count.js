import mongoose from "mongoose";

const countSchema = mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
   count: {
      type : Number,
      required : true,
   }
});

const Count = mongoose.model('Count', countSchema);

export default Count;