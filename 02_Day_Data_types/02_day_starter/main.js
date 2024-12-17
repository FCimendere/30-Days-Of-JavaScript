// Declare a variable named challenge and assign it to an initial value '30 Days Of JavaScript'.
// Print the string on the browser console using console.log()

const firstText = "30 Days Of JavaScript";
console.log(firstText);
console.log(typeof firstText);

// Print the length of the string on the browser console using console.log()
console.log(firstText.length);

// Change all the string characters to capital letters using toUpperCase() method
console.log(firstText.toUpperCase());

// Change all the string characters to lowercase letters using toLowerCase() method
console.log(firstText.toLowerCase());

// Cut (slice) out the first word of the string using substr() or substring() method
//substr deprecated
const slicedFirstText = firstText.substring(0, 2);
console.log(slicedFirstText);

// Slice out the phrase Days Of JavaScript from 30 Days Of JavaScript.
console.log(firstText.slice(2));

// Check if the string contains a word Script using includes() method
console.log(firstText.includes("Script"));
console.log(firstText.includes("script"));

// Split the string into an array using split() method
console.log(firstText.split()); //  output [ '30 Days Of JavaScript' ]
console.log(firstText.split()[0]); // utput 30 Days Of JavaScript

// Split the string 30 Days Of JavaScript at the space using split() method
console.log(firstText.split(" ")); //[ '30', 'Days', 'Of', 'JavaScript' ]

// 'Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon' split the string at the comma and change it to an array.
const secondText = "Facebook, Google, Microsoft, Apple, IBM, Oracle, Amazon";
console.log(secondText.split(","));
/*[
  'Facebook',
  ' Google',
  ' Microsoft',
  ' Apple',
  ' IBM',
  ' Oracle',
  ' Amazon'
]*/
console.log(secondText.split(", ")); //additional space there is

/*[
  'Facebook',
  'Google',
  'Microsoft',
  'Apple',
  'IBM',
  'Oracle',
  'Amazon'
]*/

// Change 30 Days Of JavaScript to 30 Days Of Python using replace() method.
console.log(firstText.replace("JavaScript", "Python")); //30 Days Of Python

// What is character at index 15 in '30 Days Of JavaScript' string? Use charAt() method.
console.log(firstText.charAt(15)); // S

// What is the character code of J in '30 Days Of JavaScript' string using charCodeAt()
console.log(firstText.charCodeAt(firstText.indexOf("J"))); //74
console.log("J".charCodeAt()); //74
console.log(typeof "J".charCodeAt()); // number

// Use indexOf to determine the position of the first occurrence of a in 30 Days Of JavaScript
console.log(firstText.indexOf("first")); //-1

// Use lastIndexOf to determine the position of the last occurrence of a in 30 Days Of JavaScript.
console.log(firstText.lastIndexOf("last")); //-1 means not found

// Use indexOf to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
const thirdText =
  "You cannot end a sentence with because because because is a conjunction";
console.log(thirdText.indexOf("because")); //31

// Use lastIndexOf to find the position of the last occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(thirdText.lastIndexOf("because")); //47

// Use search to find the position of the first occurrence of the word because in the following sentence:'You cannot end a sentence with because because because is a conjunction'
console.log(thirdText["because"]); //undefined

// Use trim() to remove any trailing whitespace at the beginning and the end of a string.E.g ' 30 Days Of JavaScript '.
console.log(" 30 Days Of JavaScript ".trim());

// Use startsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(firstText.startsWith("30")); //true
console.log(firstText.startsWith(" 30")); //false
console.log(firstText.startsWith("3")); //true

// Use endsWith() method with the string 30 Days Of JavaScript and make the result true
console.log(firstText.endsWith("t")); //true
console.log(firstText.endsWith("Script")); //true
console.log(firstText.endsWith("script")); //false
console.log(firstText.endsWith(" ")); //false

// Use match() method to find all the a’s in 30 Days Of JavaScript
console.log(firstText.match("a")); //[ 'a', index: 4, input: '30 Days Of JavaScript', groups: undefined ]
console.log(firstText.match(/a/g)); //[ 'a', 'a', 'a' ]

// Use concat() and merge '30 Days of' and 'JavaScript' to a single string, '30 Days Of JavaScript'
const string = "30 Days of";
console.log(string.concat("JavaScript")); //30 Days ofJavaScript
console.log(string.concat(" JavaScript")); //30 Days of JavaScript
console.log(string.concat("\tJavaScript")); //30 Days of	JavaScript

// Use repeat() method to print 30 Days Of JavaScript 2 times
console.log(firstText.repeat(2)); //30 Days Of JavaScript30 Days Of JavaScript

//The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.
console.log(
  "The quote 'There is no exercise better for the heart than reaching down and lifting people up.' by John Holmes teaches us to help one another.\n"
);

console.log(
  `"Love is not patronizing and charity isn't about pity, it is about love. Charity and love are the same -- with charity you give love, so don't just give money but reach out your hand instead."`
);

// Check if typeof '10' is exactly equal to 10. If not make it exactly equal.
const num = 10;
console.log("10" === num); //false
console.log(+"10" === num); //true
console.log(Number("10") === num); //true
console.log(parseInt("10") === num); //true

// Check if parseFloat('9.8') is equal to 10 if not make it exactly equal with 10.

console.log(parseFloat("9.8") === 10); //false
const num2 = Math.round(parseFloat("9.8"));
console.log(num2 === num); // true
const num3 = Math.ceil(parseFloat("9.8"));
console.log(num3 === num); // true

//Check if 'on' is found in both python and jargon
console.log("python".includes("on") && "jargon".includes("on")); //true

// I hope this course is not full of jargon. Check if jargon is in the sentence.
console.log(
  "I hope this course is not full of jargon. Check if jargon is in the sentence.".includes(
    "jargon"
  )
); //true

// Generate a random number between 0 and 100 inclusively.
console.log(Math.floor(Math.random() * 101));

// Generate a random number between 50 and 100 inclusively.
console.log(Math.floor(Math.random() * 51 * 101));

// Generate a random number between 0 and 255 inclusively.

// Access the 'JavaScript' string characters using a random number.
