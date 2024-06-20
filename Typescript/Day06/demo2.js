//return multiple value from the function
function operation(a, b) {
    return [a + b, a * b, a - b];
}
var _a = operation(10, 5), add = _a[0], mul = _a[1], sub = _a[2];
console.log("\n        Addition :: ".concat(add, "\n        Multiply :: ").concat(mul, "\n        Substract :: ").concat(sub, "\n    "));
