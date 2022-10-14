const express = require('express'); // It's a function
const app = express(); 
const hbs = require('hbs');
// Upload env variables
require('dotenv').config();
const port = process.env.PORT;

// Here: Without engine

// Serve static content
app.use(express.static('public/react'));

// Tricky route to catch 404 not found pages
app.get('*', (req, res) => {
  // Before send string param => res.send('404 | Not found');
  res.sendFile(__dirname + '/public/404.html');
}); 


app.listen(port, () => {
  console.log(`My express app listening on ${port}`);
});