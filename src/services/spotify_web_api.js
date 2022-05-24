'use strict';

var AuthenticationRequest = require('./authentication-request'),
  WebApiRequest = require('./webapi-request'),
  HttpManager = require('./http-manager');

// var SpotifyWebApi = require('spotify-web-api-node');
const access_token = 'BQABZW7SlPv47QyG3i99TtiZXukPZ5tu3J433_hrzj5OeM5knng_m78jptqvfAecWeIgpj91lHWgahohmEVxOcITrKXnllw05CbXQHo1QLy2xJctpjWoutkK2TkDzfZbQdXa0kiOpwy-xiCZ2cWtcjnTeuHrh1y4M1z4HF3UML6UIMxpmo1qNp5_h7oErRhZlGob4ts0d1b2J2_LY-_RIdtnFcVDVGtjl-Q-HL4IXieztXuFEzOiOZu3NJqb8xyrkIONIVFHrZ-YDWEZ4wMawt4ERLQ'

let spotifyApi = null;
// function getApi() {
//     if (spotifyApi == null) {
//         // Set the access token

//         spotifyApi = new SpotifyWebApi({
//             clientId: 'bc8332d1b89c4e169806baa60bcd3f37',
//             clientSecret: '3ffcd40e47d04269b0a1c2ae8ad810c1',
//             redirectUri: 'http://localhost:8888/callback'
//         });
//         // TODO
//         process.env.SPOTIFY_ACCESS_TOKEN='BQCQItQ2jx8m2p7PFTS-W2GllDe7nCrc2c5_tjRNsi4UsZfJ4bgmk9htC5hY2wE06XJrK5n4N6OxiIOByyhS1LwvKXuyA2NM_SS_4-qRPMlf8LRa9IF7lotYiN0hAgis2Gnrs9U_h4x8vK-ohyo-8JtFmlvz5rx3dnAR7Hy1b0PrV2mVTxc1Q76VkZYATVwznGnAUZHlNSzJPmrhHX65AoSNO1a2n5klO4P6AVdZRQ8S6c6Ip5bbt02B3qRBqxqpyipC_av9TcQMFFnqswqb4izvPvU'
//         spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN);
//     }
//     return spotifyApi
// }

/**
   * Get a user's playlists.
   * @param {string} userId An optional id of the user. If you know the Spotify URI it is easy
   * to find the id (e.g. spotify:user:<here_is_the_id>). If not provided, the id of the user that granted
   * the permissions will be used.
   * @param {Object} [options] The options supplied to this request.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getUserPlaylists('thelinmichael').then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing
   *          a list of playlists. If rejected, it contains an error object. Not returned if a callback is given.
   */
function getUserPlaylists(userId, options, callback) {
    var path;
    if (typeof userId === 'string') {
        path = '/v1/users/' + encodeURIComponent(userId) + '/playlists';
    } else if (typeof userId === 'object') {
        callback = options;
        options = userId;
        path = '/v1/me/playlists';
    } /* undefined */ else {
        path = '/v1/me/playlists';
    }

    return WebApiRequest.builder(access_token)
        .withPath(path)
        .withQueryParameters(options)
        .build()
        .execute(HttpManager.get, callback);
};


module.exports = { /*getApi: getApi,*/ getUserPlaylists: getUserPlaylists };
