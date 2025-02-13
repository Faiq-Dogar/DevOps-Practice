const express = require('express');
const mongoose = require('mongoose');
const app = express();
const PORT = process.env.PORT || 3000;

try{
  mongoose.connect("mongodb://localhost:21764/my-app")
  console.log("erver is connected to DB")
}catch (error){
  console.log("Error: DB not connected")
}
// Middleware to serve static files from the "public" directory
app.use(express.static('public'));

// Root route
app.get('/', (req, res) => {
  res.send('Welcome to the Web Development Server!');
});

// Start the server
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});

