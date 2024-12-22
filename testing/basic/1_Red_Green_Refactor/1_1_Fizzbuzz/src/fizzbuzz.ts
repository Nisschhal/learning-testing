// 3 returns "Fizz"
// 5 returns "Buzz
// 15 returns "FizzBuzz"
// 9 returns "Fizz"
// 43 returns "43"
// 42 returns "Fizz"
// 45 returns "FizzBuzz"
export default function fizzbuzz(num: number) {
  const isMultipleOf3 = num % 3 === 0
  const isMultipleOf5 = num % 5 === 0
  if (isMultipleOf3) return "Fizz"
  if (isMultipleOf5) return "Buzz"
  if (isMultipleOf3 && isMultipleOf5) return "Fizzbuzz"
}
