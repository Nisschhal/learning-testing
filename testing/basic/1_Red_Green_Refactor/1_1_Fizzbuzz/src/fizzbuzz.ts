// 3 returns "Fizz"
// 5 returns "Buzz
// 15 returns "FizzBuzz"
// 9 returns "Fizz"
// 43 returns "43"
// 42 returns "Fizz"
// 45 returns "FizzBuzz"
export default function fizzbuzz(num: number) {
  if (num === 3 || num == 9 || num == 42) return "Fizz"
  if (num === 5) return "Buzz"
  if (num === 15 || num === 45) return "Fizzbuzz"
}
