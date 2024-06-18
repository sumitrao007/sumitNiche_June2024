//array
// array is growable & shrinkable dynamically 
// array is store homogenous data as well as hetrogenous data

// let a:number[]=[10,20,30];
let a1=[20,30,40];
let a2:any[]=[];
let a4=[2.5,'Sumit']
// for(let i=0;i<a.length;i++){
//     console.log("a[i]= "+a[i])
// }

// console.log(a4);
// console.log(a4.join(" "));
// console.log(a4.join("#"));
// console.log(a4.join());

// foreach method 

// a.forEach((myvalue,i,arr)=>{
//     console.log(myvalue+" Index is "+i+" Full Array "+arr)
// });

// Push & Pop 
// LIFO principal
// u can set value dyanmically 

let a:number[]=[];

a.push(10);
console.log(a);
a.push(20,50,60);
console.log(a);
let temp= a.pop();
console.log(a);
console.log("Poped value is "+temp);





