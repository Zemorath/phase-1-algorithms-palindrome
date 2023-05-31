function isPalindrome(word) {
  // Write your algorithm here
  const len = word.length;
  for (let i=0; i < len/2; i++) {
    if (word[i] !== word[len - 1 - i]) {
      return false;
    } 
  }
  return true;
};

/* 
  Add your pseudocode here
  function(string)
    get length
    loop through half of string
    check if halves match
      return false if not
    return true if else
*/

/*
  Add written explanation of your solution here
  this doesn't pass all tests but is good for checking one word, all lower case. 
  In the instance that you would need it for strings with multiple words or some upper case letters
    it would be better to split/reverse/join and compare to a join of original string. if those two joins, match then it is a palindrome.
    you would also want to include a toLowerCase to deal with the uppercases.
*/

// You can run `node index.js` to view these console logs
if (require.main === module) {
  // add your own custom tests in here
  console.log("Expecting: true");
  console.log("=>", isPalindrome("racecar"));

  console.log("");

  console.log("Expecting: false");
  console.log("=>", isPalindrome("robot"));

  console.log("Expecting: true");
  console.log("=>", isPalindrome("madam"))

  console.log("Expecting: true")
  console.log("=>", isPalindrome("never odd or even"))
}

module.exports = isPalindrome;
