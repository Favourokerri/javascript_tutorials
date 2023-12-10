//implement a stack datastructure with arrays to find a pliandrone
prompt = require('prompt-sync')()
let word = prompt('enter word to test if palindrome: ');
let letters = [];
let word2 = ""

for (let i=0; i<word.length; i++) {
    letters.push(word[i]);
}

for (let i=0; i<word.length; i++) {
    word2 += letters.pop(word[i]);
}

if (word === word2) {
    console.log('is palindrome');
} else {
    console.log('its not palindrome')
}