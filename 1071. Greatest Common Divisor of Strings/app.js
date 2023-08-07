// For two strings s and t, we say "t divides s" if and only if s = t + ... + t (i.e., t is concatenated with itself one or more times).

// Given two strings str1 and str2, return the largest string x such that x divides both str1 and str2.

// Shouldn't have any remainders.

/**
 * @param {string} str1
 * @param {string} str2
 * @return {string}
 */
var gcdOfStrings = function (str1, str2) {
  //test str2 against str1 and str2
  function test(testString) {
    if (testString) {
      let array1 = str1.split(testString);
      let array2 = str2.split(testString);
      let test1 = array1.filter((x) => x);
      let test2 = array2.filter((x) => x);
      if (test1.length == 0 && test2.length == 0) {
        //   console.log(testString);
        return `${testString}`;
      } else {
        testString = testString.slice(0, -1);
        //   console.log(testString);
        test(testString);
      }
    } else {
      return "";
    }
  }
  return test(str2);
};
gcdOfStrings("ABCABC", "ABC");
gcdOfStrings("ABABAB", "ABAB");
gcdOfStrings("LEET", "CODE");

// if (str1.length % str2.length == 0) {
//     let array = str1.split(str2);
//     let test = array.filter((x) => x);
//     if (test.length == 0) {
//       return str2;
//     } else {
//       str2 = str2.slice(0, -1);

//       gcdOfStrings(str1, str2);
//     }
//   } else {
//     str2 = str2.slice(0, -1);
//     gcdOfStrings(str1, str2);
//   }
