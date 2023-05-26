import { Router, response } from "express";
import {students} from "../models/usersarray.js";
import studentmodel from "../models/studentmodel.js";
import { faker } from '@faker-js/faker';
const router = new Router();
router.get('/', async (req,res) => {
    const students = await studentmodel.find().lean();

    res.render("student2",{students : students});
});
router.get('/create',(req,res) => {
    const studentsarray=[];
    for(let i=0; i<1000; i++){
        studentsarray.push({
            name:faker.name.firstName(),
            city:faker.address.city(),
        })
    }
    studentmodel.create( studentsarray );
   
    res.send("Done");
});
router.get('/update',(req,res) => {
   
});
router.get('/delete',(req,res) => {
    
});
router.get('/:id',(req,res) => {
   
});
export default router;