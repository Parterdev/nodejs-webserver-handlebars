const express = require('express'); // It's a function
const app = express(); 
const hbs = require('hbs');
// Upload env variables
require('dotenv').config();
const port = process.env.PORT;

// Se the default view engine => Handlebars
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials', (err) => err);


// Serve static content
app.use(express.static('public/limelight-html'));

// Define root url
app.get('/', (req, res) => {
  // res.send('Home page'); => We could render simple text
  res.render('home', {
    name: 'Parterdev',
    title: 'Node.js hbs',
    isactive: {Home: true},
  });
});

// Define the rest of the pages (using template engine)
app.get('/about', (req, res) => {
  res.render('about', {
    name: 'Parterdev',
    title: 'Node.js hbs',
    isactive: {About: true},
  }); 
});

app.get('/contact', (req, res) => {
  res.render('contact', {
    name: 'Parterdev',
    title: 'Node.js hbs',
    isactive: {Contact: true},
  }); 
});

app.get('/gallery', (req, res) => {
  res.render('gallery', {
    name: 'Parterdev',
    title: 'Node.js hbs',
    isactive: {Gallery: true},
  }); 
});

app.get('/service', (req, res) => {
  res.render('service', {
    name: 'Parterdev',
    title: 'Node.js hbs',
    isactive: {Service: true},
  }); 
});

app.get('/testimonial', (req, res) => {
  res.render('testimonial', {
    name: 'Parterdev',
    title: 'Node.js hbs',
    isactive: {Testimonial: true},
  }); 
});

// Sub route
app.get('/hello', (req, res) => {
  res.send('Hello world');
});

app.get('/*.html', (req, res) => {
  
  const reqUrl = req.url.replace('.html', '.hbs');
  const localDir = `./views${reqUrl}`;

  // console.log(reqUrl);

  try {
    if(localDir) {
      // res.sendFile(__dirname + path);  
      res.redirect(req.url.replace('.html', ''))
    }
  } catch(err) {
    console.log("Error with directory", err);
  }
  
});

// Tricky route to catch 404 not found pages
/* app.get('*', (req, res) => {
  // Before send string param => res.send('404 | Not found');
  res.sendFile(__dirname + '/public/404.html');
}); */


app.listen(port, () => {
  console.log(`My express app listening on ${port}`);
});