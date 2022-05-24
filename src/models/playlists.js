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
        function (err) {
            console.log('Something went wrong:', err.message);
        }
};

async function getPlaylist(id) {
    // const spotifyApi =  spotifyWebApi.getApi();
    return spotifyWebApi.getPlaylist(id);
}


module.exports = {
    getPlaylists, getPlaylists,
    playlistNames: playlistNames,
    getPlaylist: getPlaylist };

// getPlaylists();