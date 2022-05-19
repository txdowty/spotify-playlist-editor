const spotifyWebApi = require('../services/spotify_web_api.js');

async function playlistNames() {
    const spotifyApi = spotifyWebApi.getApi();
    spotifyApi.getUserPlaylists()
        .then(function (data) {
            var playlists = [];
            console.log(data);
            data.body.items.forEach(playlist => {
                console.log(playlist.name);
                playlists.push(playlist.name);
            });
            return playlists.sort((a, b) => a.title.localeCompare(b.title));
        }),
        // .then(function (data) {
        //     // res.contentType('application/json');
        //     // res.send(JSON.stringify(data))
        // },
        function (err) {
            console.log('Something went wrong:', err.message);
        }
};

module.exports = {playlistNames: playlistNames};