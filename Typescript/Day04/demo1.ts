// anonymous function
// function does not have name 
// it execute there itself 

let temp1= function (){
    console.log("First type anonymous function is called")
}

// temp1();

let temp2= function (a:number,b:number):number{
    return (a+b);
}

// let res= temp2(10,20);
// console.log("Result "+res)

// fat arrow function / Arrow function 
// function does not have name 
// it execute there itself 

let temp3= ()=>{
    console.log("fat arrow Function is called ")
}

// temp3();

let temp4= (a:number,b:number):number=>{
    return (a+b);
}

// console.log(`
//         Addition is ${temp4(10,20)}
//     `);

//optional parameter function

function add1(a:number,b?:number){
    console.log("Value of a is "+a);// 10
    console.log("Value of b is "+b);//undefined
    console.log("Value of a+b is "+(a+b!)); //NAN
}

// add1(10);
// add1(10,20);

function add2(a?:number,b?:number){
    console.log("Value of a is "+a);// 10
    console.log("Value of b is "+b);//undefined
    console.log("Value of a+b is "+(a!+b!)); //NAN
}

// add2();

// default parameter function

function add3(a:number,b:number=40){
    console.log("Value of a is "+a);// 10
    console.log("Value of b is "+b);//undefined
    console.log("Value of a+b is "+(a+b)); //NAN
}

// add3(10);
// add3(50,10);

function add4(a:number=70,b?:number){
    console.log("Value of a is "+a);// 10
    console.log("Value of b is "+b);//undefined
    console.log("Value of a+b is "+(a+b)); //NAN
}


// add4();