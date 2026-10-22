// 14. Write a program to check student grade based on marks:
// a. 80 and above = A
// b. 60 to 79 = B
// c. below 60 = C

console.log("===============================");

let grade = 77;
if (grade >= 90) {
  console.log("A+ Grade");
} 
else if (grade >= 80) {
  console.log("A Grade");
} 
else if (grade >= 70) {
  console.log("B+ Grade");
} 
else if (grade >= 60) {
  console.log("B Grade");
} 
else {
  console.log("C Grade");
}


console.log("===============================");

// 5. Write a program to calculate electricity bill:
// a. up to 100 units = ₹5 per unit
// b. above 100 units = ₹8 per unit

let usage = 120;

if (usage > 100) {
    console.log("Electricity bill:", usage * 8);
} else {
    console.log("Electricity bill:", usage * 5);
}


console.log("===============================");

// 16. Write a program to calculate employee total salary using:
// a. Basic salary
// b. HRA = 10%
// c. DA = 5%

let basicSalary = 45000;

let hra = basicSalary * 10 / 100;
let da = basicSalary * 5 / 100;

let totalSalary = basicSalary + hra + da;

console.log("Basic Salary:", basicSalary);
console.log("HRA:", hra);
console.log("DA:", da);
console.log("Total Salary:", totalSalary);


console.log("===============================");
// 17. Write a program to check whether a person is eligible for voting

let age = 19;

if (age >= 18) {
    console.log("Eligible for voting");
} else {
    console.log("Not eligible for voting");
}


console.log("===============================");
// 18. Write a program to calculate discount:
// a. purchase above ₹5000 = 15% discount
// b. otherwise 5% discount

let product = 20000;

if(product > 5000 ){
    console.log(`Discounted Amount is ${product * 15 / 100}  `);
    
}else{
    console.log(`Discounted Amount is ${product * 5 / 100}  `);
}


console.log("===============================");

// Write a program to convert minutes into hours and minutes.

let celsius = 30;

let fahrenheit = (celsius * 9 / 5) + 32;

console.log("Temperature in Fahrenheit:", fahrenheit);


console.log("===============================");

// Write a program to convert minutes into hours and minutes.

let minutes = 150;

let hours = Math.floor(minutes / 60);
let remainingMinutes = minutes % 60;

console.log("Hours:", hours);
console.log("Minutes:", remainingMinutes);


console.log("===============================");
