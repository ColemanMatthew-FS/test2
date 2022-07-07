const {
    sum,
    diff,
    prod,
    quot,
    sqrt,
    max
} = require("./math")

describe("Testing the math module", () => {
    test("should add two integers and return their sum", () =>{
        expect(sum(4,2)).toBe(6);
    });
    test("should subtract two integers and return their difference", () =>{
        expect(diff(4,2)).toBe(2);
    });
    test("should multiply two integers and return their product", () =>{
        expect(prod(4,2)).toBe(8);
    });
    test("should divide two integers and return their quotient", () =>{
        expect(quot(4,2)).toBe(2);
    });
});

describe("Testing advanced math", () => {
    test("should return the square root of a number", () =>{
        expect(sqrt(4)).toBe(2);
    });
    test("should return max of any two numbers", () =>{
        expect(max(4,2)).toBe(4);
    });
})