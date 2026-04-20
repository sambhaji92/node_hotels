const express=require('express');
const router=express.Router();

const MenuItem=require('./../models/MenuItem');
// const MenuItem=require('./models/MenuItem');

 //post MenuLtem Add DATa
 router.post('/',async(req,res)=>{
   try{
    const data=req.body
  const newmenu=new MenuItem (data);
  // save menu data database
  const response=await newmenu.save();
  console.log('data saved');
  res.status(200).json(response);
   }
   catch(err){
     console.log(err);
    res.status(500).json({error:'internal saver error'});
   }
 })

 //  Get MenuItem Data
router.get('/',async(req,res)=>{
  try {
    const data=await MenuItem.find();
    console.log(' data fetched');
res.status(200).json(data);
  
  } catch(err){
    console.log(err);
    res.status(500).json({error:'internal saver error'});
  }
 })
 
//  router.get('/:teste',async(req,res)=>{
//   try {
//     const data=await MenuItem.find();
//     console.log(' data fetched');
// res.status(200).json(data);
  
//   } catch(err){
//     console.log(err);
//     res.status(500).json({error:'internal saver error'});
//   }
//  })
module.exports=router;