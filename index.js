function isPalindrome(word) {
  // Write your algorithm here
  if(word === word.split("").reverse().join("")){
    return true;
  } else {
    return false;
  }
}

/* 
  Add your pseudocode here
  1. Take the input string `word`.
  2. Split the string into an array of characters.
  3. Reverse the array.
  4. Join the reversed array back into a string.
  5. Compare the reversed string with the original input string.
  6. If they are the same, return true (the word is a palindrome).
  7. Otherwise, return false.
*/

/*
  Add written explanation of your solution here
  The function checks if a given word is a palindrome. A palindrome is a word that reads the same backward as forward.
  
  To achieve this:
  - The input string is split into an array of its characters using `split("")`.
  - The array is reversed using `reverse()`.
  - The reversed array is joined back into a string using `join("")`.
  - The reversed string is compared with the original input string.
  
  If the reversed string matches the original, the function returns `true` because the word is a palindrome. Otherwise, it returns `false`.

*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));
}

module.exports = isPalindrome;
