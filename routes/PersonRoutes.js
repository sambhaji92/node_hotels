const express=require('express');
const router=express.Router();
const Person=require('./../models/person');

// post Router to add Person
router.post('/',async(req,res)=>{
    
  try{
    const data=req.body 
    
    const newPerson= new Person (data);
//     save newparson database in data
const  response=await newPerson.save();
console.log(' data saved');
res.status(200).json(response);
  }
  catch(err){
    console.log(err);
    res.status(500).json({error:'internal saver error'});
  }
 })
 // get function in person data
  router.get('/',async(req,res)=>{
   try {
     const data=await Person.find();
     console.log(' data fetched');
 res.status(200).json(data);
   
   } catch(err){
     console.log(err);
     res.status(500).json({error:'internal saver error'});
   }
  })
//   get person work of types
  router.get('/:worktype',async(req,res)=>{
    try{
      const worktype=req.params.worktype;
      if(worktype=='chef'|| worktype=='waiter'|| worktype=='manger'){
        const response=await Person.find({work:worktype});
        console.log('response feched Data');
        res.status(200).json(response);
      }else{
        res.status(400).json({error:'Invalied work type'});
      }
    }catch(err){
      console.log(err);
      res.status(500).json({error:'Internal sarver erroe'});
    }
   })
   router.put('/:id',async(req,res)=>{
    try{
      const PersonId=req.params.id;
      const updatedPersonData=req.body;

      const response=await Person.findByIdAndUpdate(PersonId,updatedPersonData,{
        new:true,
        runValidators:true,
      })
      
      if(!response) {
        return res.status(400).json({error:'person not found'});

      }
      console.log('Data updated');
      res.status(200).json(response);
    }catch(err){
 console.log(err);
 res.status(500).json({error:'Internal  server error'});
    }
   })
//Deleted data function
   router.delete('/:id', async(req,res)=>{
    try{
      const PersonId=req.params.id;
      const response=await Person.findByIdAndDelete(PersonId);
      if(!response){
        return res.status(400).json({error:'person not found'});

        }
      console.log('Data delete');
      res.status(200).json({message:'Delete Data Successfuly'});
    }catch(err){
      console.log(err);
 res.status(500).json({error:'Internal  server error'});
    
    }
   })
   module.exports=router;