const startHi = require("../index.js");
const chai = require("chai");
const assert = chai.assert;

const tests = {
    case1: "hithere",
    case2: "hothere",
    case3: "fithere",
    case4: "wothere"
}

describe("Testing startHi function", function() {
    it("should return true", function() {
        assert.equal(startHi(tests.case1), true);
    });
    it("should return false", function() {
        assert.equal(startHi(tests.case2), false);
    });
    it("should return false", function() {
        assert.equal(startHi(tests.case3), false);
    });
    it("should return false", function() {
        assert.equal(startHi(tests.case4), false);
    });
});
