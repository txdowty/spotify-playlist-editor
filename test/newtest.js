var expect = require("chai").expect;
var formatter = require("../src/models/fancytree_formatter.js");

// chai.use(deepEqualInAnyOrder);

const data1 = [{ 'name': 'a/b/c', 'data': 1234 }, { 'name': 'a/d/e', 'data': 2345 }];
const data1Hierarchy =
{
	"a": {
		"b": {
			"c": {
				"name": "a/b/c",
				"data": 1234
			}
		},
		"d": {
			"e": {
				"name": "a/d/e",
				"data": 2345
			}
		}
	}
};

const data2 = [{ 'name': 't/u/v', 'data': 1234 }, { 'name': 'x/y/z', 'data': 2345 }];
const data2Hierarchy =
{
	"t": {
		"u": {
			"v": {
				"name": "t/u/v",
				"data": 1234
			}
		}
	},
	"x": {
		"y": {
			"z": {
				"name": "x/y/z",
				"data": 2345
			}
		}
	}
}

describe('Format playlist data for display', function() {
    describe("Create correct object hierarchy", function() {
        it('groups hierarchical path segments when groups present', function() {
            var result = formatter._createHierarchicalMap(data1);
            // deep compare
            expect(result).to.eql(data1Hierarchy);
        });
        it('groups hierarchical path segments when no groups present', function() {
            var result = formatter._createHierarchicalMap(data2);
            console.log(JSON.stringify(result));
            // deep compare
            expect(result).to.eql(data2Hierarchy);
        });
    });
    
});