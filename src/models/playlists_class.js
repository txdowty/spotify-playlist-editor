'use strict';

// class Playlist {

// };

class Playlists {
    _playlists = [];

    append(playlists) {
        this._playlists.push(...playlists);
    }

    get size() {
        return this._playlists.length
    }

    get playlistsArray() {
        return this._playlists
    }

    names() {
        return this._playlists.map(function (item) {
            return item.name;
        })
    }
};

module.exports.Playlists = Playlists;
