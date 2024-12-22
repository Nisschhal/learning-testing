import fizzbuzz from "./fizzbuzz"
describe("fizzbuzz", () => {
  it("return a string", () => {
    expect(typeof fizzbuzz(5)).toBe("string")
  })
})
