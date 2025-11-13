'use strict';
console.log("Script loaded."); // Task1
let name = prompt("Enter your name: (Task 2)");
let names = ["Alex","Laggorithm","Oleksandr"]
if (names.includes(name)) {
    document.querySelector("#greeting").textContent = "Welcome back, " + name + "!";
}
else{
    document.querySelector("#greeting").textContent = "Hello, " + name + ", haven't seen you before!";
}

function Calc()
{
    let numbers = [];
    let count = 3;
    while (count > 0) {
        let input = prompt("Enter a digit, please");
        let number = parseInt(input, 10);
        if (isNaN(number)) {
            alert("Invalid input. Please enter a valid number.");
            break;
        } 
        numbers.push(parseFloat(number));
        count--;
    }
    if (numbers.length === 3){
        let sum = numbers[0] + numbers[1] + numbers[2];
        let product = numbers[0] * numbers[1] * numbers[2];
        let average = sum / 3;
        document.querySelector("#result").innerHTML = "Sum: " + sum + "<br>Product: " + product + "<br>Average: " + average;
    }
}
function Hat()
{
    let randInt = Math.floor(Math.random() * (4 - 1 +1)) + 1;

    switch(randInt) {
        case 1:
            document.querySelector("#hatResult").textContent = "You're a wizard, "+ name +"! +100500 points to Griffindor";
            break;
        case 2:
            document.querySelector("#hatResult").textContent = "You've been assigned to Hufflepuff, "+ name +".";
            break;
        case 3:
            document.querySelector("#hatResult").textContent = "You've been assigned to Ravenclaw, "+ name +".";
            break;
        case 4:
            document.querySelector("#hatResult").textContent = "You've been assigned to Slytherin, "+ name +".";
            break;
        default:
            document.querySelector("#hatResult").textContent = "Error in hat selection.";
    }

}
function LeapYear()
{
    let input = prompt("Enter a year, please");
    let year = parseInt(input, 10);
    if (isNaN(year)) {
        alert("Invalid input. Please enter a valid year.");
        return;
    }
    let isLeap = (year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0);
    if (isLeap) {
        document.querySelector("#leapYearResult").textContent = year + " is a leap year. :D";
    } else {
        document.querySelector("#leapYearResult").textContent = year + " is not a leap year. :(";
    }
}
function WhatYears(){
    let fromInput = prompt("Enter the starting year:");
    let toInput = prompt("Enter the ending year:");
    let fromYear = parseInt(fromInput, 10);
    let toYear = parseInt(toInput, 10);
    if (isNaN(fromYear) || isNaN(toYear) || fromYear > toYear) {
        alert("Invalid input. Please enter valid years.");
        return;
    }
    else{
        AllLeapYears(fromYear, toYear);
    }
}
function AllLeapYears(from, to){
    let leapYears = [];
    for (let year = from; year <= to; year++) {
        if ((year % 4 === 0 && year % 100 !== 0) || (year % 400 === 0)) {
            leapYears.push(year);
        }
    }
    return document.querySelector("#allLeapYearsResult").textContent = "Leap years between " + from + " and " + to + ": " + leapYears.join(", ");
}