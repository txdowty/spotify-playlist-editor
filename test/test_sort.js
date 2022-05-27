var expect = require("chai").expect;
var formatter = require("../src/models/fancytree_formatter.js");

const data1 = [
    {
        'name': 'z',
        "external_urls": {
            "spotify": "https://open.spotify.com/playlist/1"
        }
    },
    { 'name': 'a', 
        "external_urls": {
            "spotify": "https://open.spotify.com/playlist/2"
        }
    }
];
const data1HierarchyExpected =
{
    "a": {
        "name": "a",
        "external_urls": {
            "spotify": "https://open.spotify.com/playlist/1"
        }
    },
    "z": {
        "name": "z",
        "external_urls": {
            "spotify": "https://open.spotify.com/playlist/2"
        }
    }
 };

const data2 = [
    {
        'name': 't/u/v',
        "external_urls": {
            "spotify": "https://open.spotify.com/playlist/3"
        }
    }, 
    { 
        'name': 'x/y/z', 
        "external_urls": {
            "spotify": "https://open.spotify.com/playlist/4"
        }
    }
];
const data2HierarchyExpected =
{
    "t": {
        "u": {
            "v": {
                "name": "t/u/v",
                "external_urls": {
                    "spotify": "https://open.spotify.com/playlist/3"
                }
            }
        }
    },
    "x": {
        "y": {
            "z": {
                "name": "x/y/z",
                "external_urls": {
                    "spotify": "https://open.spotify.com/playlist/4"
                }
            }
        }
    }
}

describe('Sort', function () {
    describe("Create correct object hierarchy", function () {
         it('groups hierarchical path segments when groups present', function () {
            var data1HierarchyResult = formatter._createHierarchicalMap(data1);
            // deep compare
            expect(data1HierarchyResult).to.eql(data1HierarchyExpected);
        });
        it('groups hierarchical path segments when no groups present', function () {
            var data2HierarchyResult = formatter._createHierarchicalMap(data2);
            // console.log(JSON.stringify(result));
            // deep compare
            expect(data2HierarchyResult).to.eql(data2HierarchyExpected);
        });
    });
    describe("Create correct fancytree display data", function () {
        it('reformats hierarchical playlist data', function () {
            var result = formatter.displayFormatFromRawPlaylists(data1);

            console.log(JSON.stringify(result));

        })
    });
});