//1.) 
const maxOfTwoNumbers = (num1, num2) => {
    if (num1 >= num2) {
      return num1;
    } else {
      return num2;
    }
  }
  
  // console.log('Exercise 1 Result:', maxOfTwoNumbers(3, 9));
  
  //2.) 
const isAdult = function(age) {
    if (age >= 18){
        return 'Adult'
} else {
    return 'Minor'
}
}

//console.log('Exercise 2 Result:', isAdult(18));

//3.) 
const isCharAVowel = function(vowel) {
    if (vowel=== 'a' || vowel=== 'e' || vowel=== 'i' || vowel === 'o' || vowel === 'u') {
      return true
    }
} 

// console.log('Exercise 3 Result:', isCharAVowel("a"));

//4.)

const generateEmail = function (name, email) {
    return (`${name} ${email}`)
}

//console.log('Exercise 4 Result:', generateEmail("Phillipcostas","@gmail.com"));


//5.)

const greetUser = function (name, dayTime) {
    return (`Good ${dayTime}! Hello ${name}, hope you are well!`)
}


// console.log('Exercise 5 Result:', greetUser("Phillip", "evening"));


//6.)

let word = 'rockstar'
//console.log (word.split('').reverse().join(''));

//7.) 
/*
Exercise 7: checkPalindrome()

Define a function called checkPalindrome. It should take a string and return true if the string is a palindrome (reads the same forwards and backwards) and false otherwise.

Example: checkPalindrome('radar') should return true.
Example: checkPalindrome('taco') should return false.

Complete the exercise in the space below:
*/
//const checkPalindrom = function (str) {

//}
//console.log('Exercise 7 Result:', checkPalindrom(""));

//8.)

/*
Exercise 8: maxOfThree()

Define a function, maxOfThree. It should accept three numbers and return the largest among them.

Example: maxOfThree(17, 4, 9) should return 17.

Complete the exercise in the space below:
*/

const maxOfThree = maxVal(num1, num2, num3)
let maxVal = 0 
if (num1 > num2) {
  maxVal = num1
} else {
  maxVal = num2 
} if (num3 > maxVal) {
    maxVal = num3
} else {
  return maxVal
}

//console.log('Exercise 8 Result:', maxOfThree(5, 10, 8));


  //9.) 

  /*
Exercise 9: calculateTip()

Create a function called calculateTip. It should take two arguments: the bill amount and the tip percentage (as a whole number). The function should return the amount of the tip.

Example: calculateTip(50, 20) should return 10.

Complete the exercise in the space below:
*/
const calculateTip = (num1 * num2) {
    let calculateTip = (num1 * num2)
    
        console.log(calculateTip)

}


console.log('Exercise 9 Result:', calculateTip(50, 20));
