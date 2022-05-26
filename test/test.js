// // const { map } = require("../app");

const paths = [{ 'id': 'a/b/c', 'data': 1234 }, { 'id': 'a/d/e', 'data': 2345 }];
const paths1 = [{ 'id': 't/u/v', 'data': 1234 }, { 'id': 'x/y/z', 'data': 2345 }];

const playlists =
    [{
        "collaborative": false,
        "description": "@one&#x2F;two&#x2F;three",
        "external_urls": {
            "spotify": "https://open.spotify.com/playlist/5M8uk6pCvmrBwL7Fy6ts4y"
        },
        "href": "https://api.spotify.com/v1/playlists/5M8uk6pCvmrBwL7Fy6ts4y",
        "id": "5M8uk6pCvmrBwL7Fy6ts4y",
        "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27320a13bddf394768a532f5547",
            "width": 640
        }],
        "name": "_one/two/three",
        "owner": {
            "display_name": "Tim Dowty",
            "external_urls": {
                "spotify": "https://open.spotify.com/user/tdowty"
            },
            "href": "https://api.spotify.com/v1/users/tdowty",
            "id": "tdowty",
            "type": "user",
            "uri": "spotify:user:tdowty"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "NCwxMjM5MTE0MzIwZDFlMzhhNzBiNTI5YzEwYjNkNDIwNTg5OTA4NGZh",
        "tracks": {
            "href": "https://api.spotify.com/v1/playlists/5M8uk6pCvmrBwL7Fy6ts4y/tracks",
            "total": 1
        },
        "type": "playlist",
        "uri": "spotify:playlist:5M8uk6pCvmrBwL7Fy6ts4y"
    },
    {
        "collaborative": false,
        "description": "@one&#x2F;two&#x2F;three",
        "external_urls": {
            "spotify": "https://open.spotify.com/playlist/5M8uk6pCvmrBwL7Fy6ts4y"
        },
        "href": "https://api.spotify.com/v1/playlists/5M8uk6pCvmrBwL7Fy6ts4y",
        "id": "5M8uk6pCvmrBwL7Fy6ts4y",
        "images": [{
            "height": 640,
            "url": "https://i.scdn.co/image/ab67616d0000b27320a13bddf394768a532f5547",
            "width": 640
        }],
        "name": "_one/two/four",
        "owner": {
            "display_name": "Tim Dowty",
            "external_urls": {
                "spotify": "https://open.spotify.com/user/tdowty"
            },
            "href": "https://api.spotify.com/v1/users/tdowty",
            "id": "tdowty",
            "type": "user",
            "uri": "spotify:user:tdowty"
        },
        "primary_color": null,
        "public": false,
        "snapshot_id": "NCwxMjM5MTE0MzIwZDFlMzhhNzBiNTI5YzEwYjNkNDIwNTg5OTA4NGZh",
        "tracks": {
            "href": "https://api.spotify.com/v1/playlists/5M8uk6pCvmrBwL7Fy6ts4y/tracks",
            "total": 1
        },
        "type": "playlist",
        "uri": "spotify:playlist:5M8uk6pCvmrBwL7Fy6ts4y"
    },
    {
        "collaborative": false,
        "description": "",
        "external_urls": {
            "spotify": "https://open.spotify.com/playlist/7qhB69iqGIJUuPFljoiibH"
        },
        "href": "https://api.spotify.com/v1/playlists/7qhB69iqGIJUuPFljoiibH",
        "id": "7qhB69iqGIJUuPFljoiibH",
        "images": [{
            "height": 640,
            "url": "https://mosaic.scdn.co/640/ab67616d0000b27308597f977f49e4993b9210d5ab67616d0000b273576fccf9a91d9f7c808b8abdab67616d0000b2736a3c49ba3975d662adf949bbab67616d0000b273a48ff7096192374d2863e396",
            "width": 640
        }, {
            "height": 300,
            "url": "https://mosaic.scdn.co/300/ab67616d0000b27308597f977f49e4993b9210d5ab67616d0000b273576fccf9a91d9f7c808b8abdab67616d0000b2736a3c49ba3975d662adf949bbab67616d0000b273a48ff7096192374d2863e396",
            "width": 300
        }, {
            "height": 60,
            "url": "https://mosaic.scdn.co/60/ab67616d0000b27308597f977f49e4993b9210d5ab67616d0000b273576fccf9a91d9f7c808b8abdab67616d0000b2736a3c49ba3975d662adf949bbab67616d0000b273a48ff7096192374d2863e396",
            "width": 60
        }],
        "name": "More Today Than Yesterday",
        "owner": {
            "display_name": "Tim Dowty",
            "external_urls": {
                "spotify": "https://open.spotify.com/user/tdowty"
            },
            "href": "https://api.spotify.com/v1/users/tdowty",
            "id": "tdowty",
            "type": "user",
            "uri": "spotify:user:tdowty"
        },
        "primary_color": null,
        "public": true,
        "snapshot_id": "MTUzLGQ0MjI3YTg4YTEwNDcxYzYyMTc4ODIxNmIwNGFjN2U5OTY5ZmRjMzk=",
        "tracks": {
            "href": "https://api.spotify.com/v1/playlists/7qhB69iqGIJUuPFljoiibH/tracks",
            "total": 138
        },
        "type": "playlist",
        "uri": "spotify:playlist:7qhB69iqGIJUuPFljoiibH"
    },
    {
        "collaborative": false,
        "description": "",
        "external_urls": {
            "spotify": "https://open.spotify.com/playlist/1fvvigpvlZpI4r3dyGfhvS"
        },
        "href": "https://api.spotify.com/v1/playlists/1fvvigpvlZpI4r3dyGfhvS",
        "id": "1fvvigpvlZpI4r3dyGfhvS",
        "images": [{
            "height": 640,
            "url": "https://mosaic.scdn.co/640/ab67616d0000b2732c1725bf5dc299ae3ee142faab67616d0000b2738744974cbc4105e46466a5fbab67616d0000b273a9449562700677da368ad455ab67616d0000b273b36949bee43217351961ffbc",
            "width": 640
        }, {
            "height": 300,
            "url": "https://mosaic.scdn.co/300/ab67616d0000b2732c1725bf5dc299ae3ee142faab67616d0000b2738744974cbc4105e46466a5fbab67616d0000b273a9449562700677da368ad455ab67616d0000b273b36949bee43217351961ffbc",
            "width": 300
        }, {
            "height": 60,
            "url": "https://mosaic.scdn.co/60/ab67616d0000b2732c1725bf5dc299ae3ee142faab67616d0000b2738744974cbc4105e46466a5fbab67616d0000b273a9449562700677da368ad455ab67616d0000b273b36949bee43217351961ffbc",
            "width": 60
        }],
        "name": "Break Time",
        "owner": {
            "display_name": "Tim Dowty",
            "external_urls": {
                "spotify": "https://open.spotify.com/user/tdowty"
            },
            "href": "https://api.spotify.com/v1/users/tdowty",
            "id": "tdowty",
            "type": "user",
            "uri": "spotify:user:tdowty"
        },
        "primary_color": null,
        "public": true,
        "snapshot_id": "MjEzLGY2YjMzNTRkYzk4MWQ1ZmFjZTUzOWM2MDA5ZTBjMmZkYmRkYTQzODg=",
        "tracks": {
            "href": "https://api.spotify.com/v1/playlists/1fvvigpvlZpI4r3dyGfhvS/tracks",
            "total": 176
        },
        "type": "playlist",
        "uri": "spotify:playlist:1fvvigpvlZpI4r3dyGfhvS"
    }
    ]


class mymap {
    constructor() {
        this._map = new Object();
    }

    append(playlists) {
        return playlists.reduce((map, obj) => {
            var segments = obj.name.split('/');
            var parent = this._map;
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

    _format(input_parent_item, level = 0) {
        const child_nodes = [];
        for (var key in input_parent_item) {
            const value = input_parent_item[key];
            if (value.href) {
                // leaf playlist
                child_nodes.push({ title: key, playlist: 'playlist' });
            }
            else {
                const this_node = { title: key, folder: true, children: [] };
                level += 1;
                let nodes_array = this._format(value, level);
                this_node.children.push(...nodes_array);
                if (level == 0) {
                    return this_node;
                }
                child_nodes.push(this_node);
            }
        }
        return child_nodes;
    }

    format() {

        var output = this._format(this._map);
        console.log(JSON.stringify(output));
    }

}

var map = new mymap();
map.append(playlists);
map.format();

// console.log(JSON.stringify(map));
