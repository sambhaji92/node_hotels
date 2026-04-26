const express=require ('express');

const app = express()
 const db =require('./db');
 const bodyPaser=require('body-parser');
 app.use(bodyPaser.json());
 require('dotenv').config();

 const PORT=process.env.PORT || 3000;
//  const Person=require('./models/person');

//  const MenuItem=require('./models/MenuItem');
app.get('/', (req, res) => {
  res.send('welcome to MY hotel con i help you ')
})

// this is tesing only
// app.get('/chicken', (req, res) => {
//   res.send('This is the chicken page!');
// });


// app.get('/idli', (req, res) => {
//   var customaiz_idli={
//     name:'rava idli',
//     size:'10 cm diameter',
//     is_sambhar:true,
//     is_chatani:false,

//   }
//   res.send(customaiz_idli);
// });

// Import Router file s
const PersonRoutes=require('./routes/PersonRoutes');
const MenuItemRoutes=require('./routes/MenuItemRoutes');

// use the Routers
app.use('/Person',PersonRoutes);
app.use ('/MenuItem',MenuItemRoutes);

 

 
app.listen(3000, () => {
  console.log('Server is running on http://localhost:3000')
})