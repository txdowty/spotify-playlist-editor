const spotifyWebApi = require('../services/spotify_web_api.js');

const playlistsClass = require('./playlists_class.js');

function fetchGroupFromServer(offset) {
    // const spotifyApi = spotifyWebApi.getApi();
    return spotifyWebApi.getUserPlaylists({ limit: 50, offset: offset });
};

async function getPlaylists() {
    // const spotifyApi = spotifyWebApi.getApi();
    let playlists = new playlistsClass.Playlists();
    // const user = await spotifyApi.getMe();
    var res = await fetchGroupFromServer(0);
    playlists.append(res.body.items);
    while (res.body.next) {
        res = await fetchGroupFromServer(playlists.size);
        playlists.append(res.body.items)
    }
    // console.log(playlists.names());
    // console.log(JSON.stringify(playlists));
    return playlists._playlists;
};

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



module.exports = { getPlaylists, getPlaylists, playlistNames: playlistNames };

// getPlaylists();