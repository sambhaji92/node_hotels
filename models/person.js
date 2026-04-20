const mongoose=require('mongoose');

// define the Parson Schema
const PersonSchema=new mongoose.Schema({
 name:{
    type:String,
    require:true
 },
 age:{
    type:String,

 },
 work:{
    type:String,
    enum:['chef','waiter','manger'],
    require:true

 },
 mobile:{
    type:String,
    require:true
 },
 email:{
    type:String,
    require:true,
    unique: true
 },
 address:{
    type:String,
    require:true
 },
 salary:{
    type:Number,
    require:true
 },
 
 
});
const Person=mongoose.model('person',PersonSchema);
module.exports=Person;