import mongoose from "mongoose";
import Count from "../models/count.js";

export const getCount = async (req , res)=>{
    try{

        const add = await Count.find({name:"Add"});
        const update = await Count.find({name:"Update"});

        return res.status(200).json({"add":add[0]?.count , "update":update[0]?.count});

    }catch(error)
    {
        return res.status(500).json({"msg":error?.message});
    }
}