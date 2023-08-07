// Given an integer n, return a string array answer (1-indexed) where:

// answer[i] == "FizzBuzz" if i is divisible by 3 and 5.
// answer[i] == "Fizz" if i is divisible by 3.
// answer[i] == "Buzz" if i is divisible by 5.
// answer[i] == i (as a string) if none of the above conditions are true.

/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function (n) {
  let array = [];
  for (let i = 1; i <= n; i++) {
    let divisibleBy3 = i % 3 == 0;
    let divisibleBy5 = i % 5 == 0;

    if (divisibleBy3 && divisibleBy5) {
      array.push("FizzBuzz");
    } else if (divisibleBy3) {
      array.push("Fizz");
    } else if (divisibleBy5) {
      array.push("Buzz");
    } else {
      array.push(`${i}`);
    }
  }

  return array;
};
