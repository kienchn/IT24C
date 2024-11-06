//Data type/Input
let name = "Radar";
let count = 5;

//check numbers if it is odd or even/Process
function CheckOdd_Even(count){
    //Conditional Statement & Arithmetic-logical Operators
    if (count >=0){
        switch(count % 2 === 0) {
            case true:
                return count + " is even number";
            case false:
                return count + " is odd number";
        }
    }
}
//Output
for (let i = 1; i<=5; i++){
    count = i;
    console.log(CheckOdd_Even(count));
}
console.log("~~~~~~~~~~~~~~~~~");

//Determime if the number is prime or not/Process
function Prime_or_Not(count){
    //Conditional statement & Arithmetic-logical Operators
    if (count < 2)
    return false;
    if (count === 2)
    return true;
    for (let i = 2; i < count; i++){
        if (count % i === 0){
            return false;
        }       
    }
    return true;
}
//Output
for(let i =1; i<= count ; i++){
    if (Prime_or_Not(i)){
        console.log(i + " is a Prime Number");
    }
    else{
        console.log(i + " is not a Prime Number");
    }
}
console.log("~~~~~~~~~~~~~~~~~");

//checking if the variable Radar is a palindrome or not/Process
function IfPalindrome(name){
    //converting word and reversing Conditional Statement & Arithmetic-logical Operators
    let lowerCaseName = name.toLowerCase();
    let reversedname = lowerCaseName.split("").reverse('').join("");
    
    if(lowerCaseName === reversedname){
        return `'${name}' is a palindrome`;
    }
    else{
        return `'${name}' is not a palindrome`;
    }
}
//Output
console.log(IfPalindrome(name));
console.log("~~~~~~~~~~~~~~~~~");