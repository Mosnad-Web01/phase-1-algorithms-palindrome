function isPalindrome(word) {
  // Convert the word to lowercase to make the comparison case-insensitive
  word = word.toLowerCase();

  // Initialize two pointers, one at the beginning and one at the end of the word
  let left = 0;
  let right = word.length - 1;

  // Iterate through the word, comparing characters from the beginning and the end
  while (left < right) {
    // If the characters are not the same, the word is not a palindrome
    if (word[left] !== word[right]) {
      return false;
    }

    // Move the pointers inward
    left++;
    right--;
  }

  // If the loop completes without returning false, the word is a palindrome
  return true;
}

/* 
  Add your pseudocode here
*/

/*
  Add written explanation of your solution here
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
