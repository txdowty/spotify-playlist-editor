'use strict';

var AuthenticationRequest = require('./authentication-request'),
  WebApiRequest = require('./webapi-request'),
  HttpManager = require('./http-manager');

// var SpotifyWebApi = require('spotify-web-api-node');
const access_token = 'BQBVyK8ALhxNG3pnrh39U-tvs5cnFjA2g9nlNjCPCg7315CB2hTVemdWIw1VWtO38LTEeDg4FhErtmrIRKWQAT5u-8AflxBliptQGXGV9nhNkJeVrTirdWRARAk5dpWXTexOK_pfU7WO21IB_zZ8qy6bXtUyl-TEg40Hb9BvlJ1DwjawOJIEHFfXO4pY-aSqPNBzam1wj5cyo3eqTlZQoYwjlC3nM4-kXumLWQHdwtBDin7OM1p196vgT-hyODYrYuoVly1vMDjB8-XDMkMJU-mQGpg'

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

/**
   * Get a playlist.
   * @param {string} playlistId The playlist's ID.
   * @param {Object} [options] The options supplied to this request.
   * @param {requestCallback} [callback] Optional callback method to be called instead of the promise.
   * @example getPlaylist('3EsfV6XzCHU8SPNdbnFogK').then(...)
   * @returns {Promise|undefined} A promise that if successful, resolves to an object containing
   *          the playlist. If rejected, it contains an error object. Not returned if a callback is given.
   */
function getPlaylist(playlistId, options, callback) {
    return WebApiRequest.builder(access_token)
      .withPath('/v1/playlists/' + playlistId)
      .withQueryParameters(options)
      .build()
      .execute(HttpManager.get, callback);
};


module.exports = {
    getUserPlaylists: getUserPlaylists,
    getPlaylist: getPlaylist
};
