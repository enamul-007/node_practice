// 👉 সংখ্যা ইনপুট নাও। তারপর ternary দিয়ে চেক করো সেটা even নাকি odd।
var number = Number(prompt("enter your number :"));

var result = number % 3 == 0 ? "even" : "odd";
console.log(result);

// 👉 বয়স ইনপুট নাও। যদি 18 বা তার বেশি হয়, "Can vote" না হলে "Too young"

var age = Number(prompt("Enter your age :"))

const votterAge = age >= 18 ? "Can vote " : "Too young"
console.log(votterAge);


