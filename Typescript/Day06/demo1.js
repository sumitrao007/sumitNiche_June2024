//swap the 2 values without using 3rd variable 
// Addition & Substraction 
// multiplication & Division
// Using xoring 
// using array destructor 
var _a;
var a = 20;
var b = 10;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(`
//         After The Swapping 
//         a =${a}
//         b =${b}
//     `);
// multiplication & Division
// a=a*b;
// b=a/b;
// a=a/b;
// console.log(`
//     ========multiplication & Division=======
//     After The Swapping 
//     a =${a}
//     b =${b}
// `);
//// Using xoring 
// a=a^b;
// b=a^b;
// a=a^b;
// console.log(`
//     ========Using xoring=======
//     After The Swapping 
//     a =${a}
//     b =${b}
// `);
// using array destructor 
_a = [b, a], a = _a[0], b = _a[1];
console.log("\n    ========array destructor=======\n    After The Swapping \n    a =".concat(a, "\n    b =").concat(b, "\n"));
