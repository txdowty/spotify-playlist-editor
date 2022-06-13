const express = require('express');
const { access } = require('fs');
var path = require('path');
const {spotifyWebApi} = require('./services/spotify_web_api.js');

const app = express();


// routes
const authRoutes = require('./api/routes/auth.js');
const playlistsRoutes = require('./api/routes/playlists.js');

app.use((req, res, next) => {
    res.header("Access-Control-Allow-Origin", "*");
    res.header(
      "Access-Control-Allow-Headers",
      "Origin, X-Requested-With, Content-Type, Accept, Authorization"
    );
    if (req.method === "OPTIONS") {
      res.header("Access-Control-Allow-Methods", "PUT, POST, PATCH, DELETE, GET");
      return res.status(200).json({});
    }
    next();
});

// Routes
app.get('/', function (req, res) {
  if (!spotifyWebApi.getAccessToken()) {
    res.redirect('auth/login');
  }
  else {
    res.sendFile(path.join(__dirname, '/views/index.html'));
  }
});


// app.get('/main', function (req, res) {
  
//   res.sendFile(path.join(__dirname, '/views/index.html'));
// });

app.use('/auth', authRoutes);
app.use('/playlists', playlistsRoutes);

module.exports = app;

