/*
// Muhammad Owais (345360)

// ============= CHAPTER 5: MATH EXPRESSIONS =============

// QUESTION 1
// Write a program that takes two numbers & add them in a new variable. Show the result in your browser.
// Ans:
let num1 = parseFloat(prompt("Enter first number:"));
let num2 = parseFloat(prompt("Enter second number:"));
let sum = num1 + num2;
document.write("Sum: " + sum + "<br>");

// QUESTION 2
// Repeat task1 for subtraction, multiplication, division & modulus.
// Ans:
let subtraction = num1 - num2;
let multiplication = num1 * num2;
let division = num1 / num2;
let modulus = num1 % num2;

document.write("Subtraction: " + subtraction + "<br>");
document.write("Multiplication: " + multiplication + "<br>");
document.write("Division: " + division + "<br>");
document.write("Modulus: " + modulus + "<br>");

// QUESTION 3
// Do the following using JS Mathematic Expressions:
// Ans:
let variable;
document.write("a. Value after variable declaration is: " + variable + "<br>");

variable = parseFloat(prompt("Enter a number to initialize variable:"));
document.write("c. Initial value: " + variable + "<br>");

variable++;
document.write("e. Value after increment is: " + variable + "<br>");

variable += 7;
document.write("g. Value after addition is: " + variable + "<br>");

variable--;
document.write("i. Value after decrement is: " + variable + "<br>");

let remainder = variable % 3;
document.write("k. The remainder is: " + remainder + "<br>");

// QUESTION 4
// Cost of one movie ticket is 600 PKR. Write a script to store ticket price in a variable & calculate the cost of buying 5 tickets.
// Ans:
let ticketPrice = 600;
let numberOfTickets = parseInt(prompt("Enter number of tickets to buy:"));
let totalCost = ticketPrice * numberOfTickets;
document.write("Total cost for " + numberOfTickets + " tickets:", totalCost, "PKR<br>");

// QUESTION 5
// Write a script to display multiplication table of any number in your browser.
// Ans:
let number = parseInt(prompt("Enter a number for multiplication table:"));
document.write("Multiplication table for " + number + "<br>");
for(let i = 1; i <= 10; i++) {
    document.write(number + " x " + i + " = " + (number * i) + "<br>");
}

document.write("<br>");

// QUESTION 6
// The Temperature Converter
// Ans:
let celsius = parseFloat(prompt("Enter temperature in Celsius:"));
let fahrenheit = (celsius * 9/5) + 32;
document.write(celsius + "°C is " + fahrenheit + "°F<br>");

let fahrenheitTemp = parseFloat(prompt("Enter temperature in Fahrenheit:"));
let celsiusTemp = (fahrenheitTemp - 32) * 5/9;
document.write(fahrenheitTemp + "°F is " + celsiusTemp + "°C<br>");

// QUESTION 7
// Write a program to implement checkout process of a shopping cart system
// Ans:
let item1Price = parseFloat(prompt("Enter price of item 1:"));
let item2Price = parseFloat(prompt("Enter price of item 2:"));
let item1Quantity = parseInt(prompt("Enter quantity of item 1:"));
let item2Quantity = parseInt(prompt("Enter quantity of item 2:"));
let shippingCharges = parseFloat(prompt("Enter shipping charges:"));

let total = (item1Price * item1Quantity) + (item2Price * item2Quantity) + shippingCharges;
document.write("Receipt:<br>");
document.write("Item 1:", item1Price * item1Quantity + "<br>");
document.write("Item 2:", item2Price * item2Quantity + "<br>");
document.write("Shipping:", shippingCharges + "<br>");
document.write("Total:", total + "<br>");

// QUESTION 8
// Store total marks & marks obtained by a student in 2 variables. Compute the percentage
// Ans:
let totalMarks = parseFloat(prompt("Enter total marks:"));
let obtainedMarks = parseFloat(prompt("Enter obtained marks:"));
let percentage = (obtainedMarks / totalMarks) * 100;
document.write("Percentage: " + percentage + "%<br>");

// QUESTION 9
// Convert 10 US dollars & 25 Saudi Riyals to Pakistani Rupees
// Ans:
let usd = parseFloat(prompt("Enter amount in USD:"));
let sar = parseFloat(prompt("Enter amount in SAR:"));
let pkr = (usd * 104.80) + (sar * 28);
document.write("Total in PKR: " + pkr + "<br>");

// QUESTION 10
// Initialize a variable with some number and do arithmetic in following sequence:
// Ans:
let num = parseFloat(prompt("Enter a number:"));
let result = ((num + 5) * 10) / 2;
document.write("Result: " + result + "<br>");

// QUESTION 11
// The Age Calculator
// Ans:
let currentYear = new Date().getFullYear();
let birthYear = parseInt(prompt("Enter birth year:"));
let age1 = currentYear - birthYear;
let age2 = age1 - 1;
document.write("They are either " + age1 + " or " + age2 + " years old<br>");

// QUESTION 12
// The Geometrizer
// Ans:
let radius = parseFloat(prompt("Enter radius of circle:"));
let pi = 3.142;
let circumference = 2 * pi * radius;
let area = pi * radius * radius;
document.write("The circumference is: " + circumference + "<br>");
document.write("The area is: " + area + "<br>");

// QUESTION 13
// The Lifetime Supply Calculator
// Ans:
let snack = prompt("Enter your favorite snack:");
let currentAge = parseInt(prompt("Enter your current age:"));
let maxAge = parseInt(prompt("Enter maximum age:"));
let amountPerDay = parseInt(prompt("Enter amount consumed per day:"));
let totalSupply = (maxAge - currentAge) * 365 * amountPerDay;
document.write("You will need " + totalSupply + " to last you until the ripe old age of " + maxAge + "<br>");


// ============= CHAPTER 6: MATH EXPRESSIONS =============


// QUESTION 1
// Write a program to take a number in a variable, do the required arithmetic to display the following result in your browser:
// Ans:

let numQ1 = 10;
document.write("Result:<br>");
document.write("The value of a is: " + numQ1 + "<br>");
document.write(".................................<br><br>");

// ++a
document.write("The value of ++a is: " + (++numQ1) + "<br>");
document.write("Now the value of a is: " + numQ1 + "<br><br>");

// a++
document.write("The value of a++ is: " + (numQ1++) + "<br>");
document.write("Now the value of a is: " + numQ1 + "<br><br>");

// --a
document.write("The value of --a is: " + (--numQ1) + "<br>");
document.write("Now the value of a is: " + numQ1 + "<br><br>");

// a--
document.write("The value of a-- is: " + (numQ1--) + "<br>");
document.write("Now the value of a is: " + numQ1 + "<br><br>");

// QUESTION 2
// What will be the output in variables a, b & result after execution of the following script:
// var a = 2, b = 1;
// var result = --a - --b + ++b + b--;
// Ans:

var x = 2, y = 1;
document.write("Initial values: a = " + x + ", b = " + y + "<br>");

// Stage 1: --a
var stage1 = --x;
document.write("Stage 1: --a = " + stage1 + "<br>");

// Stage 2: --a - --b
var stage2 = stage1 - --y;
document.write("Stage 2: --a - --b = " + stage1 + " - " + y + " = " + stage2 + "<br>");

// Stage 3: --a - --b + ++b
var stage3 = stage2 + ++y;
document.write("Stage 3: --a - --b + ++b = " + stage2 + " + " + y + " = " + stage3 + "<br>");

// Stage 4: --a - --b + ++b + b--
var finalResult = stage3 + y--;
document.write("Stage 4: --a - --b + ++b + b-- = " + stage3 + " + " + (y+1) + " = " + finalResult + "<br><br>");

// QUESTION 3
// Write a program that takes input a name from user & greet the user.
// Ans:

let userName = prompt("Please enter your name:");
document.write("Hello, " + userName + "! Welcome to our website.<br><br>");

// QUESTION 4
// Write a program to take input a number from user & display it's multiplication table on your browser. 
// If user does not enter a new number, multiplication table of 5 should be displayed by default.
// Ans:

let tableNumber = prompt("Enter a number for multiplication table:") || 5;
tableNumber = parseInt(tableNumber);

document.write("<h2>Multiplication Table of " + tableNumber + "</h2>");
for(let i = 1; i <= 10; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}
document.write("<br>");

// QUESTION 5
// Take three subjects name from user and store them in 3 different variables.
// Ans:

let subject1 = prompt("Enter name of first subject:");
let subject2 = prompt("Enter name of second subject:");
let subject3 = prompt("Enter name of third subject:");

let subjectTotalMarks = 100; // Total marks for each subject

let obtainedMarks1 = parseInt(prompt("Enter obtained marks for " + subject1 + ":"));
let obtainedMarks2 = parseInt(prompt("Enter obtained marks for " + subject2 + ":"));
let obtainedMarks3 = parseInt(prompt("Enter obtained marks for " + subject3 + ":"));

let totalObtainedMarks = obtainedMarks1 + obtainedMarks2 + obtainedMarks3;
let finalPercentage = (totalObtainedMarks / (subjectTotalMarks * 3)) * 100;

// Creating result table
document.write("<table border='1' cellpadding='10'>");
document.write("<tr><th>Subject</th><th>Total Marks</th><th>Obtained Marks</th><th>Percentage</th></tr>");
document.write("<tr><td>" + subject1 + "</td><td>" + subjectTotalMarks + "</td><td>" + obtainedMarks1 + "</td><td>" + (obtainedMarks1/subjectTotalMarks*100) + "%</td></tr>");
document.write("<tr><td>" + subject2 + "</td><td>" + subjectTotalMarks + "</td><td>" + obtainedMarks2 + "</td><td>" + (obtainedMarks2/subjectTotalMarks*100) + "%</td></tr>");
document.write("<tr><td>" + subject3 + "</td><td>" + subjectTotalMarks + "</td><td>" + obtainedMarks3 + "</td><td>" + (obtainedMarks3/subjectTotalMarks*100) + "%</td></tr>");
document.write("<tr><th colspan='2'>Total</th><td>" + totalObtainedMarks + "</td><td>" + finalPercentage.toFixed(2) + "%</td></tr>");
document.write("</table>");





// ============= CHAPTER 14-16: ARRAYS =============

// QUESTION 1
// Declare an empty array using JS literal notation to store student names in future.
// Ans:
let studentNamesLiteral = [];

// QUESTION 2
// Declare an empty array using JS object notation to store student names in future.
// Ans:
let studentNamesObject = new Array();

// QUESTION 3
// Declare and initialize a strings array.
// Ans:
let stringArray = ["apple", "banana", "cherry"];

// QUESTION 4
// Declare and initialize a numbers array.
// Ans:
let numbersArray = [1, 2, 3, 4, 5];

// QUESTION 5
// Declare and initialize a boolean array.
// Ans:
let booleanArray = [true, false, true];

// QUESTION 6
// Declare and initialize a mixed array.
// Ans:
let mixedArray = ["text", 42, true, null];

// QUESTION 7
// Declare and Initialize an array and store available education qualifications in Pakistan.
// Show the listed qualifications in your browser.
// Ans:

let qualifications = ["SSC", "HSC", "BCS", "BS", "BCOM", "MS", "M. Phil.", "PhD"];

for (let i = 0; i < qualifications.length; i++) {
    document.write('<li style="list-style: auto;">' + qualifications[i] + "</li>");
}

// QUESTION 8
// Store 3 student names in an array. Take another array to store scores of these students.
// Display the scores & percentages of students.
// Ans:
let studentNames = ["Ali", "Sara", "John"];
let studentScores = [450, 380, 470];
let totalMarks = 500;

document.write("<h2>Student Scores and Percentages:</h2>");
for (let i = 0; i < studentNames.length; i++) {
    let percentage = (studentScores[i] / totalMarks) * 100;
    document.write(studentNames[i] + " scored " + studentScores[i] + " marks, Percentage: " + percentage.toFixed(2) + "%<br>");
}

document.write("<br>");

// QUESTION 9
// Initialize an array with color names and perform various operations.
// Ans:
let colors = ["Red", "Green", "Blue"];
document.write("<h2>Colors:</h2>" + colors.join(", ") + "<br>");

// a. Add color to the beginning
let colorToAddBeginning = prompt("Enter a color to add to the beginning:");
colors.unshift(colorToAddBeginning);
document.write("After adding to the beginning: " + colors.join(", ") + "<br>");

// b. Add color to the end
let colorToAddEnd = prompt("Enter a color to add to the end:");
colors.push(colorToAddEnd);
document.write("After adding to the end: " + colors.join(", ") + "<br>");

// c. Add two more colors to the beginning
colors.unshift("Purple", "Orange");
document.write("After adding two more to the beginning: " + colors.join(", ") + "<br>");

// d. Delete the first color
colors.shift();
document.write("After deleting the first color: " + colors.join(", ") + "<br>");

// e. Delete the last color
colors.pop();
document.write("After deleting the last color: " + colors.join(", ") + "<br>");

// f. Add color at a specific index
let indexToAdd = parseInt(prompt("Enter the index to add a color:"));
let colorToAdd = prompt("Enter the color to add:");
colors.splice(indexToAdd, 0, colorToAdd);
document.write("After adding at index " + indexToAdd + ": " + colors.join(", ") + "<br>");

// g. Delete color(s) from a specific index
let indexToDelete = parseInt(prompt("Enter the index to delete color(s):"));
let numberOfColorsToDelete = parseInt(prompt("Enter the number of colors to delete:"));
colors.splice(indexToDelete, numberOfColorsToDelete);
document.write("After deleting from index " + indexToDelete + ": " + colors.join(", ") + "<br>");

document.write("<br>");

// QUESTION 10
// Store student scores in an array & sort the array in ascending order.
// Ans:
let scores = [320, 230, 480, 120];
document.write("<h2>Scores of Students:</h2>" + scores.join(", ") + "<br>");
scores.sort((a, b) => a - b);
document.write("Ordered Scores of Students: " + scores.join(", ") + "<br>");

document.write("<br>");

// QUESTION 11
// Initialize an array with city names. Copy 3 array elements to selectedCities array.
// Ans:
let cities = ["Karachi", "Lahore", "Islamabad", "Quetta", "Peshawar"];
let selectedCities = cities.slice(1, 4);
document.write("<h2>Cities List:</h2>" + cities.join(", ") + "<br>");
document.write("Selected Cities List: " + selectedCities.join(", ") + "<br>");

document.write("<br>");

// QUESTION 12
// Create a single string from the below mentioned array using join method.
// Ans:
let arr = ["This ", " is ", " my ", " cat"];
let singleString = arr.join("");
document.write("<h2>Array:</h2>" + arr.join(" | ") + "<br>");
document.write("String: " + singleString + "<br>");

document.write("<br>");

// QUESTION 13
// Create a new array. Store values in FIFO order.
// Ans:
let fifoArray = [];
fifoArray.push("First");
fifoArray.push("Second");
fifoArray.push("Third");
document.write("<h2>FIFO Array:</h2>");
document.write(fifoArray.shift() + "<br>");
document.write(fifoArray.shift() + "<br>");
document.write(fifoArray.shift() + "<br>");

document.write("<br>");

// QUESTION 14
// Create a new array. Store values in LIFO order.
// Ans:
let lifoArray = [];
lifoArray.push("First");
lifoArray.push("Second");
lifoArray.push("Third");
document.write("<h2>LIFO Array:</h2>");
document.write(lifoArray.pop() + "<br>");
document.write(lifoArray.pop() + "<br>");
document.write(lifoArray.pop() + "<br>");

document.write("<br>");

// QUESTION 15
// Store phone manufacturers in an array and display a dropdown/select menu.
// Ans:
let phoneManufacturers = ["Apple", "Samsung", "Motorola", "Nokia", "Sony", "Haier"];
document.write("<h2>Phone Manufacturers:</h2>");
document.write("<select>");
for (let i = 0; i < phoneManufacturers.length; i++) {
    document.write("<option value='" + phoneManufacturers[i] + "'>" + phoneManufacturers[i] + "</option>");
}
document.write("</select>");




// ============= CHAPTER 17-20: ARRAYS AND LOOPS =============



// QUESTION 1
// Declare and initialize an empty multidimensional array (Array of arrays).
// Ans:
let multiArray = [[], [], []];

// QUESTION 2
// Declare and initialize a multidimensional array representing the following matrix:
// Ans:
let matrix = [
    [0, 1, 2, 3],
    [1, 0, 1, 2],
    [2, 1, 0, 1]
];

document.write("<h2>Matrix:</h2>");
for (let i = 0; i < matrix.length; i++) {
    document.write(matrix[i].join(" ") + "<br>");
}

// QUESTION 3
// Write a program to print numeric counting from 1 to 10.
// Ans:
document.write("<h2>Numeric Counting:</h2>");
for (let i = 1; i <= 10; i++) {
    document.write(i + " ");
}

document.write("<br><br>");

// QUESTION 4
// Write a program to print multiplication table of any number using for loop.
// Table number & length should be taken as an input from user.
// Ans:
let tableNumber = parseInt(prompt("Enter the table number:"));
let tableLength = parseInt(prompt("Enter the length of the table:"));

document.write("<h2>Multiplication Table of " + tableNumber + ":</h2>");
for (let i = 1; i <= tableLength; i++) {
    document.write(tableNumber + " x " + i + " = " + (tableNumber * i) + "<br>");
}

document.write("<br>");

// QUESTION 5
// Write a program to print items of the following array using for loop:
// fruits = ["apple", "banana", "mango", "orange", "strawberry"]
// Ans:
let fruits = ["apple", "banana", "mango", "orange", "strawberry"];
document.write("<h2>Fruits List:</h2>");
for (let i = 0; i < fruits.length; i++) {
    document.write(fruits[i] + "<br>");
}

document.write("<br>");

// QUESTION 6
// Generate the following series in your browser.
// Ans:
// a. Counting
let counting = [];
for (let i = 1; i <= 15; i++) {
    counting.push(i);
}
document.write("<h2>Counting:</h2>" + counting.join(", ") + "<br>");

// b. Reverse counting
let reverseCounting = [];
for (let i = 10; i >= 1; i--) {
    reverseCounting.push(i);
}
document.write("<h2>Reverse Counting:</h2>" + reverseCounting.join(", ") + "<br>");

// c. Even
let even = [];
for (let i = 0; i <= 20; i += 2) {
    even.push(i);
}
document.write("<h2>Even:</h2>" + even.join(", ") + "<br>");

// d. Odd
let odd = [];
for (let i = 1; i < 20; i += 2) {
    odd.push(i);
}
document.write("<h2>Odd:</h2>" + odd.join(", ") + "<br>");

// e. Series
let series = [];
for (let i = 2; i <= 20; i += 2) {
    series.push(i + "k");
}
document.write("<h2>Series:</h2>" + series.join(", ") + "<br>");

document.write("<br>");

// QUESTION 7
// Enable "search by user input" in an array.
// Ans:
let A = ["cake", "apple pie", "cookie", "chips", "patties"];
let searchItem = prompt("Enter an item to search:").toLowerCase();
let found = A.includes(searchItem);

document.write("<h2>Search Result:</h2>");
if (found) {
    document.write(searchItem + " is available in the list.<br>");
} else {
    document.write(searchItem + " is not available in the list.<br>");
}

document.write("<br>");

// QUESTION 8
// Identify the largest number in the given array.
// Ans:
let numbers = [24, 53, 78, 91, 12];
let largestNumber = Math.max(...numbers);
document.write("<h2>Largest Number:</h2>" + largestNumber + "<br>");

document.write("<br>");

// QUESTION 9
// Identify the smallest number in the given array.
// Ans:
let smallestNumber = Math.min(...numbers);
document.write("<h2>Smallest Number:</h2>" + smallestNumber + "<br>");

document.write("<br>");

// QUESTION 10
// Print multiples of 5 ranging 1 to 100.
// Ans:
document.write("<h2>Multiples of 5:</h2>");
for (let i = 5; i <= 100; i += 5) {
    document.write(i + " ");
}

document.write("<br><br>");
*/


