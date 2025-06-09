// 
function checkResult(marks) {
if (marks < 0 || marks > 100) {
    return "Invalid";
} else if (marks >= 40) {
    return "Pass";
} else {
    return "Fail";
}
}
marks = 101; // Example marks
let result = checkResult(marks);
console.log("Result: " + result);

