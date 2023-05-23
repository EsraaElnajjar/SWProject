import department from "../models/department.js";
import subject from "../models/subject.js"

export const index =async(req,res)=>{
    const subjects=await subject.find({},{name : 1}).lean();
    console.log(subjects);

    
    res.render('subjects/index',{subjects});

};


export const create = async(req,res)=>{
    const departments =  await department.find().lean();
    console.log(departments);
  res.render('subjects/create',{departments} );

}
export const store = async (req,res)=>{
  console.log(req.body)
  

  const {name,code,department}= req.body
   await subject.create({
    name,
    code,
    department
  })
res.redirect('/subjects')
  }

export const show = async (req,res)=>{
    const {id}=req.params;
   
  const singlesubject=  await subject.findById(id).populate('department').lean();
  console.log(singlesubject); 
  res.render('subjects/show',{subject : singlesubject})
}