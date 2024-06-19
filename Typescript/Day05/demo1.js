//splice
// 
// let a:number[]=[10,20,30];
// a.splice(1,0,90);
// console.log(a);
// a.splice(2,0,50,70,80);
// console.log(a);
// a.splice(3,1);
// console.log(a);
// a.splice(2,2);
// console.log(a);
// a.splice(2,1,200);
// console.log(a);
//slice 
var course = ["COre Java", 'dot net', 'SQL', 'Entity Freamwork', 'Html', 'CSS', 'JS', 'Angular 16', 'Docker', 'AWS', 'Jenkings'];
// let copiedArr= course.slice(1,6);
// console.log(course);
// console.log(copiedArr);
// copiedArr[5]="Google Cloud";
// console.log(course);
// console.log(copiedArr);
// map 
// element by element operation 
var a = [2, 3, 4, 5, 6];
var sqrArr = a.map(function (value) {
    return (value * value);
});
console.log(a);
console.log(sqrArr);
