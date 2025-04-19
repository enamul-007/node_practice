//  personal budget tracker
//  user : enamul hoque
//  total income : 5000 $
//  total expense : 2300
//  tax deducated (10%)
//  net income after tax
//  remaining balance
//  savings

const userName = "Enamul hoque ";
const income = 5000;

// multipale expense
const rent = 1200;
const grocoris = 600;
const transport = 200;
const entertainmnet = 300;

// total expences

var totalExpanse = rent + grocoris + transport + entertainmnet;

// tax deduction (10% of income )

const tax = income * 0.1;

// net income after the tax

const netIncome = income - tax;

// total remaining balance

const balance = income - totalExpanse;

// savings (20% of rimaining balance )

const savings = balance * 0.2;

console.log("personal budget tracker app");
console.log("user name : " + userName);
console.log("Total income $ " + income);
console.log("Total Expense $ " + totalExpanse);
console.log("Tax Deducated $ " + tax);
console.log("Net income $" + netIncome);
console.log("remaining balance $" + balance);
console.log("Savings (20% of balance) $" + savings);

var number1 = 20;
var number2 = 30;
var number3 = 40;

console.log(number1 < number2);
console.log((number1 = number2));
console.log(number1 == number2);

var number = 5;

if(number % 2 == 0);
console.log("Evenz");

if( number % 2 != 0);
console.log("Odd");






