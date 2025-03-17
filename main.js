// const budget_tracker = "personal budget tracker app < "
// const userName = "Enamul houque"
// const income = 30000
// const expenses=26000
// console.log(budget_tracker,userName,income,expenses);

// const base = parseFloat(prompt("Enter Base : "));
// const base2 = parseFloat(prompt("Enter Base : "));
// const height = parseFloat(prompt("Enter Height : "));

// const area = ((base + base2) * height) / 2;

let number1 = prompt("Enter first number :");
let number2 = prompt("Enter second number :");

number1 = parseInt(number1, 10);
number2 = parseInt(number2, 10);

let sum, sub;
sum = number1 + number2;
sub = number1 - number2;
document.write("Addition  = " + sum +  "<br/>");

document.write("substraction is = " + sub);
