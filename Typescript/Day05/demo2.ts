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

let a=50;
let b=a;
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


let arr:number[]=[10,20,30];

let [...arr1]=arr;

console.log(`
        ================
        Arr  = ${arr}
        arr1 = ${arr1}
     `);

     arr1[1]=80;

     console.log(`
        ================
        Arr  = ${arr}
        arr1 = ${arr1}
     `); 