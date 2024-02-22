import express from 'express';
import dotenv from 'dotenv';
import connection from './Database/dbConnection.js';
import Router from './Router/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';
import Count from './models/count.js';



dotenv.config();
const app=express();
app.use(cors());
app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}));
app.use('/',Router);



const PORT=8000;

app.listen(PORT,()=> console.log (`Server is running successfully on Port ${PORT}`));
connection();
