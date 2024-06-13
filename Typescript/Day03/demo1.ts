//Type Assertion 

// any,Object,Unknown

// syntax
// 1 Angle bracket => it works in ts file 
// 2 as synatx => it works in ts file as well as html file 

// 1 Angle bracket
var a:any;
var temp:string=(<string>a);
var temp1=(<string>a);
// temp.

// 2 as synatx

var temp2=(a as string);
// temp2.
