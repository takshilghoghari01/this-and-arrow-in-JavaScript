// "this" means the current object
// "this" is a keyword that refers to the current object in JavaScript. It is used to access properties and methods of the current object. The value of "this" depends on how a function is called, and it can refer to different objects in different contexts.
// we can access any property or method of the current object using "this" keyword.

const person = {
    name: "Tax",
    age: 30,
    city: "India",
    welcome : function() {
        console.log(` ${this.name} welcome to our website!`);
    }
}
person.welcome() // Output: Tax welcome to our website!

// Their are two way to declear our function 

//1 
function one(){
    const who = "Enter name "
    console.log(this.who); // Output: undefined because "this" is not used correctly here
    
}
one(); // Output: undefined
// in node envorment " this " is refer to empty object "{}"
console.log(this);

// we can't use this keyword in function 

// 2
const two = function() {
    const who = "Enter name "
    console.log(this.who); // Output: undefined because "this" is not used correctly here   
}
two(); // Output: undefined
// in node envorment " this " is refer to empty object "{}"


// Arrow functions

// implicit return
const addtwo = (num1 , num2) => {
    return num1 + num2;
}
console.log(addtwo(10,20)); // Output: 30

//Explicit rwturn

const addthree = (num1 , num2) => num1 + num2;
// const addthree = (num1 , num2) => (num1 + num2); same as above
// if you use "{}" , so you must use return keyword
// if you use "()" so , don't need to use return keyword
console.log(addthree(10,20)); // Output: 30 

// when you return any object that time you must use "()"
const person1 = () => ({ name : "Tax"});
console.log(person1());
