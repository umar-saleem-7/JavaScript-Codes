console.log("Hello world!");

// var can be re-declared and updated. global scope variable
var gender = 'male';
var gender = "Male"

// let cannot be re-declared but can be updated. block scope variable
let Name = 'Umar';
// let Name;
Name = 'Umar Saleem';

// cont cannot be updated and re-declared. block scope variable
const age = 20;

console.log(Name);
console.log(age);
console.log(gender);

// Object in JS

const person = {
    name: 'Umar',
    age: 20,
    gender: 'male',
    isadult: true
};
person.name = 'Umar Saleem';
console.log(person);

// Type of 
console.log(typeof person);

// arithmetic operators (+, -, *, /, %, **)
let x = 5
let y = 10

console.log('x = ', x);
console.log('y = ', y);

console.log('x + y = ', x+y);
console.log('x - y = ', x-y);
console.log('x * y = ', x*y);
console.log('x / y = ', x/y);
console.log('x % y = ', x%y);
console.log('x ** y = ', x**y);

// urany operators (x++, x--, ++x, --x)

console.log('++x = ', ++x);
console.log('--x = ', --x);
console.log('x++ = ', x++);
console.log('x-- = ', x--);

// comparison operators (<, >, <=, >=, ==, ===, !=, !==)

console.log('x > y = ', x > y);
console.log('x < y = ', x < y);
console.log('x >= y = ', x >= y);
console.log('x <= y = ', x <= y);

x = 5;
y = '5';

console.log('x = ', x);
console.log('y = ', y);

console.log('x === y = ', x === y);  // also check that both have same type
console.log('x == y = ', x == y);   // if both are equal despite of they have same type or not
console.log('x !== y = ', x !== y); 
console.log('x != y = ', x != y);

// logical operators (&&, ||, !)

x = 5;
y = 10;

console.log('x = ', x);
console.log('y = ', y);
 
console.log('x === 5 && y > x = ', x === 5 && y > x);
console.log('x === 5 && y < x = ', x === 5 || y > x);
console.log('!(x === 5) = ', !(x === 5));

// assignment operators (=, +=, -=, *=, /=, %=, **=)

// conditional statements (if, else if, else)

let age_ = 15

if (age_ === 55) console.log('Age = ', age_)
// best way to write conditional statements is given below 
if (age_ < 18) {
    console.log('Teenager');
} else if (age_ > 70){
    console.log('Older');
} else {
    console.log('Young');
}

// Ternary operator (condition ? True : False) --> compact, simple if else conditions

age_ >= 18 ? console.log('Age: ', 'Adult') : console.log('Age: ','Not Adult');

// alert (one time message), prompt (use for take temprary input from user. input always in string)
// alert('<---------HELLO---------->')
// let num = prompt('Enter a Number: ')
// if (num % 5 == 0){
//     console.log(num,'is divisible by 5')
// } else {
//     console.log(num,'is not divisible by 5')
// }

// Loops

// for loop
for (let i = 1; i <= 3; i++){
    console.log('i = ', i);
}

// while loop
let i = 1;
while(i <= 3){
    console.log('i = ', i);
    i++;
}

// do while loop
i = 1;
do {
    console.log('i = ', i);
    i++;
} while (i <= 3);

// for of loop (help to iterate over strings and arrays)
let str = 'Umar'
for (let char of str){
    console.log(char);
}

// for in loop (help to iterate over objects and arrays) givenkeyin obejects
for (let key in person){
    console.log('Key: ',key, "--> Value: ", person[key]);
}

// Strings (strings are immutable in JavaScript)
str = 'Umar Saleem'         // str defined before

// String Length (property)
let len = str.length
console.log('String: ', str, ' has length ', len);

// String Indices
console.log(str[0], ' ', str[5])

// Template Literals (Same as f string in Python)
// Strings Interpolation (To add variables in strings by using placeholders --> ${})

let output = `The String ${str} has length ${len}`
console.log(output);

// Escape Characters (\n, \t etc...)

// Strings Methods 
console.log(str.toUpperCase());
console.log(str.toLowerCase());

let s = '    Umar    '           // remove whitespaces from start and end

console.log(s.trim());

console.log(str.slice(1,4));    // give part of string (str,slice(start, end), end are optional and are not inclusive)

console.log(str.concat(s));     // Or by using '+' sign, e.g: s1 + s2 + s3 + ....

console.log(str.replace('ar', 'e'));     // replace(seacrchvalue, newvalue), replaceAll will replace all matching values

console.log(str.charAt(3));     // Find character at i index

// Arrays (Special object in JS) (Mutable)
 let Students = ["Umar", "Ahmed", "Ibrahim" ]
 let marks = [95, 96, 97]

 console.log("Length", Students.length);   // Length (Property)

 // Array indices
 for (let std of Students) {
    console.log(std.toUpperCase());
}

console.log(marks);
marks[2] = 99;
console.log(marks);

// Array Methods

Students.push("Saleem");        //add to end
console.log(Students);
let deleteval = Students.pop();                 // remove from end and return
console.log(Students);

console.log(Students.toString());     // convert array to string but no change inoriginal array

let both_arrays = Students.concat(marks);       //concate multiple arrays a1.concate(a2, a3,...)
console.log(both_arrays);

Students.unshift("Saleem");        //add to start
Students.shift();                   //removve from start and return

let sliceArray = Students.slice(0, 2)     //array.slice(start, end) end is optional an exclusive,no change in original array, if no parameter is passed then slice method is used to make copy of array

Students.splice(0, 2,"Ahmed", "Umar")     //array.splice(add, remove, replace), splice(startindex, deletecount, newelements), change original array, if just want to add some elements then deletecount shoukd be 0, if wanna delete some elements in arraye then there should not be newelements.
console.log(Students);
