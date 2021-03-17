const express = require('express');
const app = express();

// Set view engine to ejs
app.set('view engine', 'ejs');

// index page
app.get('/', (req, res) => {
  const mascots = [
    { name: 'Sammy', organization: 'DigitalOcean', birth_year: 2012 },
    { name: 'Tux', organization: 'Linux', birth_year: 1996 },
    { name: 'Moby Dock', organization: 'Docker', birth_year: 2013 },
  ];
  const tagline =
    'No programming concept is complete without a cute animal mascot.';

  res.render('pages/index', {
    mascots,
    tagline,
  });
});

// about page
app.get('/about', (req, res) => {
  res.render('pages/about');
});

const PORT = process.env.PORT || 5000;

app.listen(PORT, console.log(`Server running on port ${PORT}`));
