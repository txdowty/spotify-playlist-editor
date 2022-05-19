'use strict';

const playlists_class = require('./playlists_class.js');

function titlesSorted(playlists) {
    return playlists.playlistsArray.map(function (item) {
        return {title: item.name};
    })
}

module.exports = { titlesSorted: titlesSorted };