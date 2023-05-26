import department from "../models/department.js";
import subject from "../models/subject.js"

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

  console.log(req.body)
  

  const {name,code,department}= req.body
  const {id} = req.params;
  await subject.findByIdAndUpdate(id,{$set:{name  ,code ,department},})
   
  res.redirect('/subjects')
};

