var SpotifyWebApi = require('spotify-web-api-node');

let spotifyApi = null;
function getApi() {
    if (spotifyApi == null) {
        // Set the access token
        
        spotifyApi = new SpotifyWebApi({
            clientId: 'bc8332d1b89c4e169806baa60bcd3f37',
            clientSecret: '3ffcd40e47d04269b0a1c2ae8ad810c1',
            redirectUri: 'http://localhost:8888/callback'
        });
        spotifyApi.setAccessToken(process.env.SPOTIFY_ACCESS_TOKEN);
    }
    return spotifyApi
}

module.exports = {getApi: getApi};
