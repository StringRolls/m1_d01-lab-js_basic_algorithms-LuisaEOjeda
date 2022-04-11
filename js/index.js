let log = console.log;

// Iteration 1: Names and Input

let hacker1 = 'Tathaniel';

log(`The driver's name is ${hacker1}`)

let hacker2 = 'Samuel'

log(`The navigator's name is ${hacker2}`)

// Iteration 2: Conditionals
/*
- The driver has the longest name, it has XX characters. or
- It seems that the navigator has the longest name, it has XX characters. or
- Wow, you both have equally long names, XX characters!.
*/

if (hacker1.length > hacker2.length) {
    log(`The driver has the longest name, it has ${hacker1.length} characters`)
} else if ((hacker1.length === hacker2.length)) {
    log(`Wow, you both have equally long names, ${hacker1} characters!`)
} else {
    log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters`)
}

// Iteration 3: Loops
// Iteration 3.1 'Name' to 'N A M E'

let myDriver = "";

for (let i =0; i < hacker1.length; i++){
   myDriver += hacker1[i].toUpperCase() + " ";
}
log (myDriver.trim())

// Iteration 3.2 'Name' to 'emaN'

let navigatorReverse = "";

for (let i = hacker2.length-1; i >= 0; i--){
    navigatorReverse = navigatorReverse + hacker2[i]
}

log(navigatorReverse)

// Iteration 3.3 Lexicographic order

let hackersArray = [hacker1, hacker2];

let myArray = hackersArray.sort()

for (let i = 0; i < myArray.length; i++){
    if(myArray[0] === hacker1){
        log('The driver\s name goes first')

    } else if (myArray[0] === hacker2){
        log('Yo, the navigator goes first definitely')
    } else {
        log('What?! You both have the same name?')
    }
}

// Bonus 1: Palindromes



// Bonus 2: Lorem ipsum counter

let myStringLorem = 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Facilis unde laboriosam accusamus magnam et doloribus animi ducimus, dicta excepturi perferendis corporis porro repellendus quidem sed autem recusandae voluptatem officiis! Facere!Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.';

let wordCount = myStringLorem.split(" ").length
log (wordCount);

//log(typeof wordCount)

// count the number of times the Latin word et appears.

function countString(str, word) {
    let count = 0;

    for (let i = 0; i < str.length; i++) {

        if (str.charAt(i) == word) {
            count = count + 1;
        }
    }
    return count;
};

log(countString(myStringLorem, 'et'));

