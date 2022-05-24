'use strict';

const { append } = require('express/lib/response');
const playlists_class = require('./playlists_class.js');

function titlesSorted(playlists) {
    return playlists.map(function (item) {
        return {title: item.name};
    })
}

function titlesHierarchy(playlists) {

    const _map = new Object();
    
    function append(playlists) {
        return playlists.reduce((map, obj) => {
            var segments = obj.name.split('/');
            var parent = _map;
            for (let i = 0; i < segments.length - 1; i++) {
                const segment_name = segments[i]
                if (!parent[segment_name]) {
                    parent[segment_name] = new Object();
                }
                parent = parent[segment_name];
            }
            parent[segments.pop()] = obj;
        }, {});
    }


    function format(input_parent_item, level = 0) {
        const child_nodes = [];
        for (var key in input_parent_item) {
            const value = input_parent_item[key];
            if (value.href) {
                // leaf playlist
                child_nodes.push({ title: key, tooltip: value.description, playlist: value });
            }
            else {
                const this_node = { title: key, folder: true, children: [] };
                level += 1;
                let nodes_array = format(value, level);
                this_node.children.push(...nodes_array);
                if (level == 0) {
                    return this_node;
                }
                child_nodes.push(this_node);
            }
        }
        return child_nodes;
    }
    const hierarchy = append(playlists);
    const output = format(_map);
    return output;
}

module.exports = {
    titlesSorted: titlesSorted,
    titlesHierarchy, titlesHierarchy
};