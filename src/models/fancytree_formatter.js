'use strict';

function titlesSorted(playlists) {
    return playlists.map(function (item) {
        return { title: item.name };
    })
}

function _getFormattedTitle(title, playlist_obj) {
    if (!playlist_obj.external_urls || !playlist_obj.external_urls.spotify) {
        return title;
    }
    let track_count;
    if (playlist_obj.tracks && playlist_obj.tracks.total) {
        track_count = playlist_obj.tracks.total;
    }
    let encoded_url = encodeURIComponent(playlist_obj.external_urls.spotify);
    return `<a target="_blank" rel="noopener noreferrer" href="/playlists/${encoded_url}">${title}</a> <i>(${track_count})</i>`;
}

function _getTooltip(title, playlist_obj) {
    return playlist_obj.description || title;
}

function _sortArray(array, property_name) {
    array.sort((a, b) => (a[property_name] > b[property_name]) ? 1 : -1);
    return array;
}

function _createHierarchicalMap(playlists) {
    const map = new Object();
    playlists.reduce((_map, obj) => {
        var segments = obj.name.split('/');
        var parent = map;
        for (let i = 0; i < segments.length - 1; i++) {
            const segment_name = segments[i]
            if (!parent[segment_name]) {
                parent[segment_name] = new Object();
            }
            parent = parent[segment_name];
        }
        parent[segments.pop()] = obj;
    }, {});
    return map;
}

function displayFormatFromRawPlaylists(playlists, doSort = true) {
    function format(input_parent_item, level = 0) {
        const child_nodes = [];
        for (var key in input_parent_item) {
            const value = input_parent_item[key];
            if (value.external_urls) {
                let title = _getFormattedTitle(key, value);
                let tooltip = _getTooltip(key, value);
                child_nodes.push({ title: title, tooltip: tooltip, sortable_title: key, playlist: value });
            }
            else {
                // Create a folder
                const this_node = { title: key, sortable_title: key, folder: true, children: [] };
                level += 1;
                // Get child nodes recursively
                let nodes_array = format(value, level);
                this_node.children.push(...nodes_array);
                if (level == 0) {
                    return this_node;
                }
                child_nodes.push(this_node);
            }
        }
        if (doSort) {
            _sortArray(child_nodes, 'sortable_title');
        }
        return child_nodes;
    }

    let hierarchy = _createHierarchicalMap(playlists);
    let displayArray =  format(hierarchy);
    if (doSort) {
        _sortArray(displayArray, 'sortable_title');
    }
    return displayArray;
    // return x.sort((a,b) => (a.sortable_title > b.sortable_title) ? 1 : ((b.sortable_title > a.sortable_title) ? -1 : 0));
};


module.exports = {
    titlesSorted: titlesSorted,
    // formatPlaylists: formatPlaylists,
    // private but testable
    _createHierarchicalMap: _createHierarchicalMap,
    displayFormatFromRawPlaylists, displayFormatFromRawPlaylists
};