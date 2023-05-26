import express from "express";
import { engine } from 'express-handlebars';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";

mongoose.connect(process.env.mongoconnectionurl)
import subjectsRouter from './routes/subjects.js';


const app = express();
app.use(express.urlencoded({extended: true}))

app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');

app.use('/subjects',subjectsRouter);



app.listen(process.env.port,()=>{
    console.log('start the app on http://Localhost '+process.env.port);
});