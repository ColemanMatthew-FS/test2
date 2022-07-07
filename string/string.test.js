//tested method is imported here
const {
    uppercase,
    lowercase
} = require("./string")

//describe the test
describe("Testing the string module", () =>{
    //elaborate on what the test should do
    test("should uppercase a string input", () =>{
        //expected outcome from running the tested method
        expect(uppercase("bob")).toBe("BOB");
    });

    test("should lowercase a string input", () =>{
        expect(lowercase("FULL Sail")).toBe("full sail");
    });
});