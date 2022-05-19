const dotenv = require('dotenv');
dotenv.config();
module.exports = {
  port: process.env.PORT,
  clientId: process.env.CLIENT_ID,
  clientSecret: process.env.CLIENT_SECRET,
  redirectUrl: process.env.REDIRECT_URL,
  spotifyAccessToken: process.env.SPOTIFY_ACCESS_TOKEN
};