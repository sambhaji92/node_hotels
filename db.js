const mongoose = require('mongoose');


// Function to connect to the database and start the server
const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://127.0.0.1:27017/testDB');
    console.log('MongoDB Connected successfully');
  } catch (err) {
    console.error(err.message);
    process.exit(1); // Exit process with failure
  }
};

// Execute the connection function
connectDB();

// You can also handle connection events after the initial call
const db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
