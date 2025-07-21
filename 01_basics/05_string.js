const name = "sujoy"
const repoCount = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${name} and my repo count is ${repoCount}`);

const nameFull = "sujoy"
let repoCountN = 50

// console.log(name + repoCount + " Value");

console.log(`Hello my name is ${nameFull} and my repo count is ${repoCountN}`);


repoCountN = repoCountN + 50;

console.log(nameFull + repoCountN + " Value");


console.log(`Hello my name is ${nameFull} and my repo count is ${repoCountN}`);

console.log(typeof repoCountN);

let booleanIsLoggedIn = Boolean(repoCountN);

console.log(typeof booleanIsLoggedIn);

console.log(booleanIsLoggedIn);

repoCountN = repoCountN / 100;

console.log(booleanIsLoggedIn);

repoCountN = repoCountN / 0;

console.log(booleanIsLoggedIn);


console.log(repoCountN);


const gameName = new String('sujoy-hc-com')

// console.log(gameName[0]);
// console.log(gameName.__proto__);


// console.log(gameName.length);
// console.log(gameName.toUpperCase());
console.log(gameName.charAt(2));
console.log(gameName.indexOf('t'));

const newString = gameName.substring(0, 4)
console.log(newString);

const anotherString = gameName.slice(-8, 4)
console.log(anotherString);

const newStringOne = "  sujoy    "
console.log(newStringOne);
console.log(newStringOne.trim());
//The trim() method of String values removes whitespace from both ends of this string 
// and returns a new string, without modifying the original string.

const url = "https://sujoy.com/sujoymanna%20choudhary"

console.log(url.replace('%20', '-'))

console.log(url.includes('sundar'))

console.log(gameName.split('-'));