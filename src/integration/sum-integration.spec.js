const { checkInput, sum } =  require("./sum-integration");

describe("sum()", () => {
    // negative case testing
    it("test check input values incase of non-number value", () => {
        expect(checkInput('hello',2)).toBeFalsy();
    });
    // positive case testing
    it("should check input values before the sum function gets called", () => {
        expect(checkInput(2,2)).toBeTruthy();
    });
    //Then
    it("sum function should return addition", () => {
        expect(sum(5, 5)).toEqual(10);
    });
});