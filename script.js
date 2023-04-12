//your JS code here. If required.
function firstNonRepeatedChar() {
  // take input string from user
  const inputStr = prompt("Enter a string:");

  // initialize a map to store the frequency of characters
  const charMap = new Map();
  for (let i = 0; i < inputStr.length; i++) {
    const char = inputStr[i];
    charMap.set(char, charMap.has(char) ? charMap.get(char) + 1 : 1);
  }

  // iterate through the string and return the first non-repeated character
  for (let i = 0; i < inputStr.length; i++) {
    const char = inputStr[i];
    if (charMap.get(char) === 1) {
      return char;
    }
  }

  // return null if no non-repeated character is found
  return null;
}

// example usage
console.log(firstNonRepeatedChar()); // input: "aabbcdd", output: "c"

