// Let and Const:: way of declaration is same ,
// let indicate the variable can be re-assign to anoother value

let a=1;
a=9;
console.log(9);

// const indicate value are not re-assign to another value.

// const b=1;
b=2;
console.log(b);

//error while we re assign a const varianble value:: Assignment to constant variable.

// 2.Ternaries

// A short way to declare if-else statement 

const even=(input)=>{
  const val= input % 2==0? true:false;
  return val      
}

const val2=2;
const result =even(val2)
console.log(result);

// function even(inp){
//     return
// }

// 3.Template Literals: are clean way to concate items in a javaScript 
//  Starts with ` ` and followed by ${variable}

let  nam= 'reva';
const age=12;
// with literals
console.log(`Hello my name is : ${nam} and i am ${age} years old` );

// without literals
console.log('Hello my name is '+nam+'and i am '+age+' years old');

// 4.Shorthand properties
// whenever you have a variable is the same name as a property on an Object,we can omit the property name

const city='agra'
let nameCity={city:'jaipur'}
console.log(nameCity);
console.log(city);

// 5.Rest and Spread:: Is an es6 feature of copying joins arrays in javaScript

let student= [
   'Atul',
    'BCA',
    1
]

let student1=[
    'Anchal',
    'MCA',
    2
]

let final = [...student , ...student1]
console.log(final);

let rest1 = [student, ...student1]
console.log(rest1);

let rest2 = [ ...rest1]
console.log(rest2);

// 6.Array :
// An array is a collection of elements, Array are also an object.

// There is two type of initialize an empty array:::::::
// Array literal Syntex: const a=[];
// Array built-in function : const a = Array();

// pre-fill array
  const arr =[1,2,43]
  console.log(arr);

  const arr1=Array(1,2,3)
  console.log(arr1);

//   it can hold any value ,even value is different::::::::

let diffArray=[1,'name',[23,'ashu']]
console.log(diffArray);
// Can be access any value from given array

console.log(diffArray[2]);

// Find the length of an array

let flen=[1,1,1,1,1,1,1,1,1,11,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,1,,1,1,1,11,1,1,1,1,1,1,]
console.log(flen.length);

// filling an array from 2 at range 23


let fillFrom=Array(23).fill(2)

console.log(fillFrom);

// Merging two arrays::::

const merge=[...flen,...fillFrom]
console.log(merge);

// add an item in array:

const add= diffArray.push();
console.log(add);





