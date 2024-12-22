import fizzbuzz from "./fizzbuzz"
// each return value is a string
// 3 returns "Fizz"
// 5 returns "Buzz
// 15 returns "FizzBuzz"
// 9 returns "Fizz"
// 43 returns "43"
// 42 returns "Fizz"
// 45 returns "FizzBuzz"
// 102 (you decide, throw an Error or handle some other way)
// -12 (you decide, throw an Error or handle some other way)
// any non-number (you decide, throw an Error or handle some other way)

describe("fizzbuzz", () => {
  it("return a Fizz for 3", () => {
    expect(fizzbuzz(3)).toBe("Fizz")
  })
  it("retrun a Fizz for 12", () => {
    expect(fizzbuzz(12)).toBe("Fizz")
  })
  it("return a Buzz for 5", () => {
    expect(fizzbuzz(5)).toBe("Buzz")
  })
  it("return a FizzBuzz for 15", () => {
    expect(fizzbuzz(5)).toBe("Buzz")
  })
  it("return a Buzz for 20", () => {
    expect(fizzbuzz(5)).toBe("Buzz")
  })
})
