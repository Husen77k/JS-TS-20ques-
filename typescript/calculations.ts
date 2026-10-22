// 11. Write a program to perform all arithmetic operations on two numbers.

console.log("===============================");

let num1 = 10;
let num2 = 7;

console.log("Addition:", num1 + num2);
console.log("Subtraction:", num1 - num2);
console.log("Multiplication:", num1 * num2);
console.log("Division:", num1 / num2);


console.log("===============================");

// 12. Write a program to swap two numbers using third variable.

let a = 100;
let b = 200;

console.log(`Values Before swap is a = ${a} and b = ${b}`);

let temp : number = a;

a = b;

b = temp;

console.log(`Values after swap is a = ${a} and b = ${b}`);


console.log("===============================");


// 13. Write a program to swap two numbers without using third variable.

let c = 500;
let d = 400;

console.log(`Values Before swap is c = ${c} and d = ${d}`);

c = c + d;
d = c - d;
c = c - d;


console.log(`After swap: c = ${c}, d = ${d}`);


console.log("===============================");
