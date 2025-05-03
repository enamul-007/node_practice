// const userName = prompt("Enter your name :");
// const income = parseFloat(prompt("Enter your income :"));
// const numberOfExpense = parseInt(prompt("How many expense do you have? :"));
// if (
//   isNaN(income) ||
//   isNaN(numberOfExpense) ||
//   income <= 0 ||
//   numberOfExpense < 0
// ) {
//   console.log("invalid inputs please input valid numbers ");
// } else {
//   let totalExpense = 0;

//   for (let i = 1; i <= numberOfExpense; i++) {
//     let expense = parseFloat(prompt(`Enter your expense ${i} :`));
//     if (isNaN(expense) || expense < 0) {
//       console.log(`invalid expense ${i} please input valid expense `);
//       expense = 0;
//     }
//     totalExpense += expense;
//   }
//   const tax = income * 0.1;

//   // net income after the tax

//   const netIncome = income - tax;

//   // total remaining balance

//   const balance = income - totalExpense;

//   // savings (20% of rimaining balance )

//   const savings = balance * 0.2;

//   var finalStatus = "";

//   if (savings >= 1000) {
//     finalStatus = "Exccilent! you are saving very well!";
//   } else if (savings >= 500) {
//     finalStatus = "Good! you have a decent saivings ammount";
//   } else if (savings >= 100) {
//     finalStatus = "Needs improvement . considor redusing expense";
//   } else finalStatus = "critical you ar saving are too low";
//   console.log("personal budget tracker app");
//   console.log("user name : " + userName);
//   console.log("Total income $ " + income);
//   console.log("Total Expense $ " + totalExpense);
//   console.log("Tax Deducated $ " + tax);
//   console.log("Net income $" + netIncome);
//   console.log("remaining balance $" + balance);
//   console.log("Savings (20% of balance) $" + savings);
//   console.log(finalStatus);
// }
