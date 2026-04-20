const mongoose=require('mongoose');

const MenuItemSchema=new mongoose.Schema({
 name:{
    type:String,
    require:true
 },
 price:{
    type:String,
    require:true
 },
 teste:{
    type:String,
    enum:['sweet','spicy','sour'],
    require:true
 },
 is_drinks:{
    type:Boolean,
    default:false
 },
 ingreintes:{
    type:[String],
    default:0
 },
 num_sales:{
    type:Number,
    default:0
 },

});
const MenuItem=mongoose.model('MenuItem', MenuItemSchema);
module.exports=MenuItem;