'use strict';

var express = require('express'); // Express web server framework
var cors = require('cors');
var cookieParser = require('cookie-parser');
// const asyncify = require('express-asyncify');
const { spotifyWebApi } = require('../../services/spotify_web_api.js');

const scopes = [
    'ugc-image-upload',
    'user-read-playback-state',
    'user-modify-playback-state',
    'user-read-currently-playing',
    'streaming',
    'app-remote-control',
    'user-read-email',
    'user-read-private',
    'playlist-read-collaborative',
    'playlist-modify-public',
    'playlist-read-private',
    'playlist-modify-private',
    'user-library-modify',
    'user-library-read',
    'user-top-read',
    'user-read-playback-position',
    'user-read-recently-played',
    'user-follow-read',
    'user-follow-modify'
];


const router = express.Router();
router.use(cors());
router.use(cookieParser());


router.get('/login', function (req, res) {
    res.redirect(spotifyWebApi.createAuthorizeURL(scopes));
});

router.get('/callback', (req, res) => {
    const error = req.query.error;
    const code = req.query.code;
    const state = req.query.state;

    if (error) {
        console.error('Callback Error:', error);
        res.send(`Callback Error: ${error}`);
        return;
    }

    spotifyWebApi
        .authorizationCodeGrant(code)
        .then(data => {
            const access_token = data.body['access_token'];
            const refresh_token = data.body['refresh_token'];
            const expires_in = data.body['expires_in'];

            spotifyWebApi.setAccessToken(access_token);
            spotifyWebApi.setRefreshToken(refresh_token);

            console.log('access_token:', access_token);
            console.log('refresh_token:', refresh_token);

            console.log(
                `Sucessfully retreived access token. Expires in ${expires_in} s.`
            );
            // res.send('Success! You can now close the window.');
            // res.sendFile(path.join(__dirname, '/views/index.html'));
            // res.redirect('../main');
            res.redirect('../');

            setInterval(async () => {
                const data = await spotifyWebApi.refreshAccessToken();
                const access_token = data.body['access_token'];

                console.log('The access token has been refreshed!');
                console.log('access_token:', access_token);
                spotifyWebApi.setAccessToken(access_token);
            }, expires_in / 2 * 1000);
        })
        .catch(error => {
            console.error('Error getting Tokens:', error);
            res.send(`Error getting Tokens: ${error}`);
        });
});

module.exports = router
module.exports.spotifyWebApi = spotifyWebApi;
