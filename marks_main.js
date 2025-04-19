// student marks sheet

var marks = prompt("Enter your marks :");

if (marks > 100 || marks < 0)
     console.log("invalid marks");
else if (marks > 79) 
    console.log("A+");
else if (marks > 69) 
    console.log("A");
else if (marks > 59)
     console.log("A-");
else if (marks > 49)
     console.log("B");
else if (marks > 39) 
    console.log("C");
else if (marks > 32) 
    console.log("D");
else console.log("Fail");