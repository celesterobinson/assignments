const chai = require("chai");
const assert = chai.asssert;

const { every, some } = require("../index");

const tests = [
    {
        arr: [1, 2, 3],
        cb: (num) => typeof num === "number"
    },{
        arr: [1, 2, "3"],
        cb: (num) => typeof num === "number"
    },{
        arr: [1, "2", "3"],
        cb: (num) => typeof num === "number"
    },{
        arr: ["1", "2", "3"],
        cb: (num) => typeof num === "number"
    }
]

describe("every and some warmup", () => {
    it("should return true if everything is a number", () => {
        assert.isTrue(every(tests[0].arr, tests[0].cb));
    });
    it("should return false if everything is a number", () => {
        assert.isFalse(every(tests[1].arr, tests[1].cb));
    });
    it("should return true if everything is a number", () => {
        assert.isTrue(every(tests[2].arr, tests[2].cb));
    });
    it("should return false if everything is a number", () => {
        assert.isFalse(every(tests[3].arr, tests[3].cb));
    });
})