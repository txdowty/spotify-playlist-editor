'use strict';

// const { append } = require('express/lib/response');
// const playlists_class = require('./playlists_class.js');

function titlesSorted(playlists) {
    return playlists.map(function (item) {
        return { title: item.name };
    })
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


function titlesHierarchy(playlists) {

    function format(input_parent_item, level = 0) {
        const child_nodes = [];
        for (var key in input_parent_item) {
            const value = input_parent_item[key];
            if (value.href) {
                // Create a leaf playlist
                let encoded_url = encodeURIComponent(value.external_urls.spotify);
                const title_link = `<a target="_blank" rel="noopener noreferrer" href="/playlists/${encoded_url}">${key}</a>`;
                let tooltip = value.description || key;
                child_nodes.push({ title: title_link, tooltip: tooltip , playlist: value });
            }
            else {
                // Create a folder
                const this_node = { title: key, folder: true, children: [] };
                level += 1;
                // Get child nodes recursively
                let nodes_array = format(value, level).sort((a, b) => a.title.localeCompare(b.title));
                this_node.children.push(...nodes_array);
                if (level == 0) {
                    return this_node;
                }
                child_nodes.push(this_node);
            }
        }
        return child_nodes;
    }

    let hierarchy = _createHierarchicalMap(playlists);
    return format(hierarchy).sort((a, b) => a.title.localeCompare(b.title));;
};

module.exports = {
    titlesSorted: titlesSorted,
    titlesHierarchy, titlesHierarchy,
    _createHierarchicalMap: _createHierarchicalMap
};