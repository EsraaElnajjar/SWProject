import express from "express";
import { engine } from 'express-handlebars';
import methodoverride from 'method-override';
import dotenv from 'dotenv';



import studentrouter from "./routes/studentroute.js";

dotenv.config();
import mongoose from "mongoose";
import departmentRouter from './routes/departments.js';
import cookieParser from "cookie-parser";



import multerS3 from 'multer-s3';
import aws from 'aws-sdk';
import multer from "multer";

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

app.use('/student2',studentrouter);


app.use('/subjects',authentcation,subjectsRouter);
app.use('/departments', departmentRouter);






    app.use('/subjects',subjectsRouter);

app.use('/',authRoutes)

app.get('/student',(req,res)=>{
    res.render("student");
    });
    
app.post('/enrolljava',async (req,res)=>{
   
      res.render("enrolljava"); 
    });
app.post('/enrollphp', async(req,res)=>{
  
        res.render("enrollphp"); 
      });
app.post('/enrolldatabase',async (req,res)=>{
    
        res.render("enrolldatabase"); 
});
    app.post('/classjava', (req,res)=>{
res.render("classjava"); 
 });
app.post('/classphp', (req,res)=>{
        res.render("classphp"); 
});
app.post('/classdatabase', (req,res)=>{
res.render("classdatabase"); 
    });

app.get('/admin',(req,res)=>{
    res.render("admin");
})
app.post('/addcourse',(req,res)=>{
    res.render('subjects');
})
app.post('/adddepartment',(req,res)=>{
    res.render('departments');
})
app.post('/registers',(req,res)=>{
   res.redirect('/register')
});
const storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, "public")
    },
    filename: function (req, file, cb) {
        const parts = file.mimetype.split("/");
        cb(null, `${file.fieldname}-${Date.now()}.${parts[1]}`)
    }
})

const upload1 = multer({storage});

app.post("/save-image", upload1.single("image"), (req, res) => {
    res.status(201).json({path: req.file.filename});
    console.log(req.file.originalname);
})

 //app.use('/cssFiles',express.static(__dirname + '/assets'));
app.use(express.static("public"));

const s3 = new aws.S3({
    accessKeyId: process.env.KEY_ID,
    secretAccessKey: process.env.SECRET,
})

const upload = multer({
    storage: multerS3({
        s3: s3,
        bucket: "cwc-sample-bucket",
        contentType: multerS3.AUTO_CONTENT_TYPE,
        key: function (req, file, cb) {
            cb(null, Date.now().toString())
        },
        acl: "public-read",
    })
})

app.post("/save-image", upload.single("image"), (req, res) => {
    res.redirect(req.file.location);
})

app.use(express.static("public"));



app.listen(process.env.port,()=>{
    console.log('start the app on http://Localhost '+process.env.port);

});


