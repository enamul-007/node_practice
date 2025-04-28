// student marks sheet

// var marks = prompt("Enter your marks :");

// if (marks > 100 || marks < 0)
//      console.log("invalid marks");
// else if (marks > 79)
//     console.log("A+");
// else if (marks > 69)
//     console.log("A");
// else if (marks > 59)
//      console.log("A-");
// else if (marks > 49)
//      console.log("B");
// else if (marks > 39)
//     console.log("C");
// else if (marks > 32)
//     console.log("D");
// else console.log("Fail");

for (var i = 1; i <= 100; i++) {
  if (i % 5 == 0 && i % 3 == 0) {
    console.log("FizzBuzz\n");
  } else if (i % 3 == 0) {
    console.log("Buzz\n");
  } else if (i % 5 === 0) {
    console.log("Fizz\n");
  } else {
    console.log(`${i}\n`);
  }
}
