//data type

let k_word = "level";
let num = 5; 

//Conditional statements
if(num ===2) {
    return num + " is a Prime Number";
} else if (num === 1) {
    return num + " is not a Prime Number";
} else if (num % 2 === 0) {
    return num + " is not a Prime Number";
}else {
    return num + " is a Prime Number";
}

//Loops 
for(i = 0; i <= num; i++) {
    console.log(Prime_or_Not(i));
}

//Conditional Statements
if(num >= 0 && num <= 5) {
    switch(num % 2) {
        case 0:
            return num + "is an Even Number";
            default: 
            return num + "is an Odd Number";
    }
}
//Loops
for(i = 0; i <= num; i++) {
    console.log(Odd_Even(i));
}

let lowerCaseName = word.toLowerCase();
let reversedName = lowerCase.split("").reverse().join("");
//Conditional Statements
if (lowerCaseName === reversedName){
    return "'"+ word + "'" + " is a Palindrome";
} else {
    return "'" + word + "'" + " is not a Palindrome";
}

console.log(Palindrome_or_Not(k_word));

