//array destructor
// let a:number[]=[10,20,30];
// let [a1,a2,a3]=a;
// console.log(`
//         a1 = ${a1}
//         a2 = ${a2}
//         a3 = ${a3}
//  `);
// let [s1,...arr]=a;
// console.log(`
//         s1= ${s1}
//         arr= ${arr}
//     `);
//Shallow copy & deep copy 
// variable is by default deep copy 
var a = 50;
var b = a;
// console.log(`
//         a =${a}
//         b=${b}
//     `);
// b=80;
// console.log(`
//     After Change b value ======
//     a =${a}
//     b=${b}
// `);
// by default array is shallow copy 
// let arr:number[]=[10,20,30];
// let arr1=arr;
// console.log(`
//         Arr  = ${arr}
//         arr1 = ${arr1}
//      `)
// arr1[1]=80;
// console.log(`
//     ================
//     Arr  = ${arr}
//     arr1 = ${arr1}
//  `)
var arr = [10, 20, 30];
var arr1 = arr.slice(0);
console.log("\n        ================\n        Arr  = ".concat(arr, "\n        arr1 = ").concat(arr1, "\n     "));
arr1[1] = 80;
console.log("\n        ================\n        Arr  = ".concat(arr, "\n        arr1 = ").concat(arr1, "\n     "));
