import express from "express";
import { engine } from 'express-handlebars';
import methodoverride from 'method-override';
import dotenv from 'dotenv';
dotenv.config();
import mongoose from "mongoose";
import departmentRouter from './routes/departments.js';
import cookieParser from "cookie-parser";

mongoose.connect(process.env.mongoconnectionurl)
import subjectsRouter from './routes/subjects.js';
import authRoutes from './routes/auth.js'
import {authentcation} from './middleware/authentcation.js';
const app = express();
app.use(cookieParser())
app.use(express.urlencoded({extended: true}))
app.use(methodoverride('_method'))
app.engine('handlebars', engine());
app.set('view engine', 'handlebars');
app.set('views', './templates');
app.use('/',authRoutes)

app.use('/subjects',authentcation,subjectsRouter);
app.use('/departments', departmentRouter);

app.listen(process.env.port,()=>{
    console.log('start the app on http://Localhost '+process.env.port);
});