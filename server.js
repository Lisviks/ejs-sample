const express = require('express');
const app = express();

// Set view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', (req, res) => {
  res.render('pages/index');
});

// about page
app.get('/about', (req, res) => {
  res.render('pages/about');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
