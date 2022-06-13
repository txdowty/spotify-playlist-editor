'use strict';

const {clientId} = require('../config');
const {clientSecret} = require('../config');
const {redirectUri} = require('../config');

var SpotifyWebApi = require('spotify-web-api-node');


const spotifyWebApi = new SpotifyWebApi({
  clientId: clientId,
  clientSecret: clientSecret,
  redirectUri: redirectUri
});

module.exports = {
  spotifyWebApi: spotifyWebApi

};
