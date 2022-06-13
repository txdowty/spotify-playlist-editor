const { spotifyWebApi } = require('../services/spotify_web_api.js')

const playlistsClass = require('./playlists_class.js');

function fetchGroupFromServer(offset) {
    return spotifyWebApi.getUserPlaylists({ limit: 50, offset: offset });
};

async function getPlaylists() {
    let playlists = new playlistsClass.Playlists();
    var res = await fetchGroupFromServer(0);
    playlists.append(res.body.items);
    while (res.body.next) {
        res = await fetchGroupFromServer(playlists.size);
        playlists.append(res.body.items)
    }
    return playlists._playlists;
};

async function playlistNames() {
    spotifyWebApi.getUserPlaylists()
        .then(function (data) {
            var playlists = [];
            data.body.items.forEach(playlist => {
                playlists.push(playlist.name);
            });
            return playlists.sort((a, b) => a.title.localeCompare(b.title));
        }),
        function (err) {
            console.log('Something went wrong:', err.message);
        }
};

async function getPlaylist(id) {
    return spotifyWebApi.getPlaylist(id);
}


module.exports = {
    getPlaylists, getPlaylists,
    playlistNames: playlistNames,
    getPlaylist: getPlaylist
};
