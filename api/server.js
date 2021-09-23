const express = require('express');

const app = express();

// middleware for allowing react to fetch() from server
app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept, Authorization');
  res.header('Access-Control-Allow-Methods', 'PUT, POST, GET, OPTIONS');
  next();
});

// assets
app.get('/api/getAssets', (req, res) => {
  const assets = {
      logo: "https://betway.com/doc-centre/assets/betway-logo-white-sml.png ",
      hunch: "https://cdn.betwaygroup.com/medusa-production-cache/b/6/b604ec0b6b3e584899a17fb3255e5177a8e649e0.webp"
    }
  
  res.json(assets);
  console.log('sent assets');
})

app.listen(8000, () => {
  console.log(`listening on port ${8000}`);
})