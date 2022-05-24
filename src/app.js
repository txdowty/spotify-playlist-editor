const express = require('express');
var path = require('path');

const app = express();

// routes
const playlistsRoutes = require('./api/routes/playlists');
// module.exports = app;app.use(bodyParser.urlencoded({ extended: false }));
// app.use(bodyParser.json());

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
  res.sendFile(path.join(__dirname, '/views/index.html'));
});

app.use('/playlists', playlistsRoutes);

module.exports = app;