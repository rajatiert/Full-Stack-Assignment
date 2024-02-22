import mongoose from "mongoose";
mongoose.set('strictQuery', false);  
const connection = async ()=>{
  
  var clusterUrl ='mongodb+srv://rajat:rajat123@cluster0.59ox8gj.mongodb.net/';
  try{
      
      await mongoose.connect(clusterUrl);
      console.log("database connected succesasfully");
  }
   catch(error)
   {
     console.log("Error while connecting to database ", error);
   }
}
export  default connection;