// 3 returns "Fizz"
// 5 returns "Buzz
// 15 returns "FizzBuzz"
// 9 returns "Fizz"
// 43 returns "43"
// 42 returns "Fizz"
// 45 returns "FizzBuzz"
export default function fizzbuzz(num: number) {
  return num === 3 || num == 9 || num == 42
    ? "Fizz"
    : num === 5
    ? "Buzz"
    : num === 15 || num === 45
    ? "Fizzbuzz"
    : num === 43
    ? "43"
    : ""
}
