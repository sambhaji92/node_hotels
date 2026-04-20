// console.log("server file is runing");

// function add(a,b){
//     return a+b;
//}
// var add=function(a,b){
//     return a+b;

// }

// var add=(a,b)=>{return a+b;}
// var add=(a,b)=>a+b;
// var result=add(10,20);

// console.log(result);

// (function(){
//     console.log("ranjeet is add");
// })();

/*function callback(){
    console.log ("adding callback function is runing");

}
const add=function(a,b,callback){
    var result=a+b;
    console.log("result:"+ result);
    callback();
}
add(5,5,callback);

add (25,5,()=>console.log("add function complited"));
*/

/*var fs=require("fs");
var os= require("os");

var user= os.userInfo();
console.log(user.username);

 fs.appendFile('grting.text',"HI"+user.username+'!\n',()=>{
console.log('file is created');
 });
 console.log(fs);*/

  /*const objectToconvert={
    name:"ranjeet",
    age:33,
  };
  const json=JSON.stringify(objectToconvert); //convert To object To json string
  console.log(json);

  console.log(typeof json);*/

  const express=require('express');

  const app=express();

  app .get('/',function(req,res){
    res.send('wel come to my Hotel ...');

  })
  app.get ('/chicken',(req,res)=>{
    res.send('show sir i would  love  to sarve chicken .')
  })
  app.listen(3000);