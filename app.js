const express = require('express');
const moment = require('moment');
app.set('view engine', 'ejs');

const app = express();

// Custom middleware to verify the time of the request
app.use((req, res, next) => {
  const now = moment();
  const dayOfWeek = now.day();
  const hourOfDay = now.hour();
  if (dayOfWeek >= 1 && dayOfWeek <= 8 && hourOfDay >= 9 && hourOfDay <= 22) {
    next();
  } 
});

                                   // Routes for the three pages
app.get('/', (req, res) => {
  res.render('home');
});

app.get('/services', (req, res) => {
  res.render('services');
});

app.get('/contact', (req, res) => {
  res.render('contact');
});

      // Start the server
app.listen(3000, () => {
  console.log('Server started on port 3000');
});
