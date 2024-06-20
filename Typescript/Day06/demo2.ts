//return multiple value from the function

function operation(a:number,b:number){

    return [a+b,a*b,a-b];
}

let [add,mul,sub]=operation(10,5);

console.log(`
        Addition :: ${add}
        Multiply :: ${mul}
        Substract :: ${sub}
`);