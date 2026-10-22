// this file has answer of q1 to q6

// 1. Write a TypeScript program to declare your name, age, and city, and display them using
// console.log().

let UserName: string = "Husen";
let Age = 19;
let City: string = "Surat";

console.log(UserName);
console.log(Age);
console.log(City);

// 2. Write a program to declare two numbers and display:
// a. Addition
// b. Subtraction
// c. Multiplication
// d. Division

let a = 10;
let b = 20;

console.log("Addition:", a + b);
console.log("Subtraction:", a - b);
console.log("Multiplication:", a * b);
console.log("Division:", a / b);

// 3. Write a program to display one message using:
// a. console.log()
// b. alert()
// c. innerHTML

console.log("Hey Its Me Husen");

alert("Hey its me Husen , Again");

document.getElementById("msg")!.innerHTML = "Hey its me Husen, again and again";

// 4. Write a program to store one number and find its square and cube.

let x = 5;
console.log(`Square of variable is ${x * x} `);
console.log(`Cube of variable is ${x * x * x} `);

// 5. Write a program to calculate area of rectangle using:
// a. length
// b. Width

let rectlength = 22;
let rectwidth = 44;

const area = rectlength * rectwidth;

console.log(`Area of Rectangle is ${area}`);

// 6. Write a program showing different TypeScript data types:
// a. number
// b. string
// c. boolean

let myAge: number = 19;
let greeting: string = "Hello!";
let isAdult: boolean = true;

console.log("Age:", myAge);
console.log("Greeting:", greeting);
console.log("Is Adult:", isAdult);
