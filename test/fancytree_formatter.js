var expect = require("chai").expect;
var formatter = require("../src/models/fancytree_formatter.js");

const data1 = [
    {
        'name': 'a/d/c',
        "external_urls": {
            "spotify": "https://open.spotify.com/playlist/1"
        }
    },
    {
        'name': 'a/b/e',
        "external_urls": {
            "spotify": "https://open.spotify.com/playlist/2"
        }
    }
];
const data1HierarchyExpected =
{
    "a": {
        "d": {
            "c": {
                "name": "a/d/c",
                "external_urls": {
                    "spotify": "https://open.spotify.com/playlist/1"
                }
            }
        },
        "b": {
            "e": {
                "name": "a/b/e",
                "external_urls": {
                    "spotify": "https://open.spotify.com/playlist/2"
                }
            }
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

describe('Format playlist data for display', function () {
    describe("Create correct name segment group hierarchy", function () {
        it('groups hierarchical path segments when groups present', function () {
            var data1HierarchyResult = formatter._createHierarchicalMap(data1);
            // deep compare
            expect(data1HierarchyResult).to.eql(data1HierarchyExpected);
        });
        it('correct hierarchical path segments when no groups present', function () {
            var data2HierarchyResult = formatter._createHierarchicalMap(data2);
            // deep compare
            expect(data2HierarchyResult).to.eql(data2HierarchyExpected);
        });
    });
    describe("Create correct fancytree display data", function () {
        it('correctly reformats hierarchical playlist data with sorting', function () {
            var result = formatter.displayFormatFromRawPlaylists(data1);
            expect(result).to.be.an('array');
            expect(result).to.have.lengthOf(1);
            expect(result[0].sortable_title).to.equal('a');
            expect(result[0].folder).to.equal(true);
            expect(result[0].children).to.have.length(2);
            expect(result[0].children[0].sortable_title).to.equal('b');
            expect(result[0].children[0].folder).to.equal(true);
            expect(result[0].children[0].children).to.have.length(1);
            expect(result[0].children[0].children[0].sortable_title).to.equal('e');
            expect(result[0].children[0].children[0]).to.not.have.property('folder');

            expect(result[0].children[1].sortable_title).to.equal('d');
            expect(result[0].children[1].folder).to.equal(true);
            expect(result[0].children[1].children).to.have.length(1);
            expect(result[0].children[1].children[0].sortable_title).to.equal('c');
            expect(result[0].children[1].children[0]).to.not.have.property('folder');
        });
        it('correctly reformats hierarchical playlist data with no sorting', function () {
            var result = formatter.displayFormatFromRawPlaylists(data1, false);
            expect(result).to.be.an('array');
            expect(result).to.have.lengthOf(1);

            expect(result).to.be.an('array');
            expect(result).to.have.lengthOf(1);
            expect(result[0].sortable_title).to.equal('a');
            expect(result[0].children).to.have.length(2);
            expect(result[0].children[0].sortable_title).to.equal('d');
            expect(result[0].children[0].children).to.have.length(1);
            expect(result[0].children[0].children[0].sortable_title).to.equal('c');

            expect(result[0].children[1].sortable_title).to.equal('b');
            expect(result[0].children[1].children).to.have.length(1);
            expect(result[0].children[1].children[0].sortable_title).to.equal('e');
        });
    });
});