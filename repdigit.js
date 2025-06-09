function isRepdigit(num) {
    return new Set(String(num)).size === 1;
}
num = 4564; // Example number to check
let result=isRepdigit(num);
console.log("Is the number " + num + " a repdigit? " + result); // Output: true
