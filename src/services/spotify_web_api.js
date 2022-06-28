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

// function getCurrentUserInfo() {
//   return spotifyWebApi.getMe();
// }

// function getUserInfo(userId) {
//   return spotifyWebApi.getUser(userId);
// }

// async function getUserInfo(userId) {
//   var data;
//   if (!userId) {
//     data = await spotifyWebApi.getMe();
//   }
//   else {
//     data = await spotifyWebApi.getUser(userId);
//   }
//   return data.body
// }
module.exports = {
  spotifyWebApi: spotifyWebApi,
  // getCurrentUserInfo: getCurrentUserInfo,
  // getUserInfo: getUserInfo
};
