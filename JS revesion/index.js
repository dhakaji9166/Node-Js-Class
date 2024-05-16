

// let firstName = "Lalchand";
// let age = 23;
// let isMarried = false;

// if (isMarried == true) {
//     console.log(firstName + " is married");
// }

// else {
//     console.log(firstName + " is not married");
// }


// writw a program to print 1 to 100 

// for(let i =0 ; i<=100 ; i++) {
//     setTimeout(() => {
//         console.log(i)
//     }, i* 1000);
// }

// let curentValue = 0;
// let nextValue = 1;

// function sumNumner() {
//     let result = curentValue + nextValue;
//     console.log(result);
//     curentValue = nextValue;
//     nextValue = result;
// }

// for (let i = 0; i < 100; i++) {
//     setTimeout(sumNumner, i * 1000);
// }

let Numbers = [67, 25, 92, 48, 10, 73, 36, 51, 88, 5, 61, 33, 79, 14, 97];

// for (i = 0; i < Numbers.length; i++) {
//     if (Numbers[i] % 2 == 0) {
//         console.log(Numbers[i]);
//     }

// }

let hightestValue = Math.max(...Numbers);
// console.log(hightestValue);


let greatestValue = Numbers[0];
for (i = 0; i < Numbers.length; i++) {
    if (Numbers[i] > greatestValue) {
        greatestValue = Numbers[i];
    }
}
// console.log(greatestValue);

// Numbers.forEach(function (value) {
//     if (value > greatestValue) {
//         greatestValue = value;
//     }
// });

// console.log(greatestValue);


// const  allUser =[{
//     name: "Lalchand",
//     age: 23,
//     gender : "Male"

// },{
// name : "Mohan",
//     age: 26,
//     gender : "Male"
// }
// ,{
//     name: "Rahul",
//     age: 15,
//     gender : "Male"
// }
// ,{
//     name  : "Jas",
//     age: 18,
//     gender : "Male"
// },
// {
//     name: "Radha",
//     age: 20,
//     gender : "Female"
// }];

// for( let i = 0 ; i < allUser.length ; i++){
//     if(allUser[i].age > 18){
//         console.log(allUser[i].name);
//     }
// }

// for( let i =0 ; i < allUser.length; i++){
//     if(allUser[i].gender == "female"){
//         console.log(allUser[i].name);
//     }
// }

// String Question 

// function getLength(str) {
//     console.log("Original String :", str);
//     console.log("Length of the string is", str.length);
// }

// getLength("Lalchand");

// function findIndexOf(str, target) {
//     console.log("Original String :", str);
//     console.log("Target String :", str.indexOf(target));
// }

// findIndexOf("Lalchand Dhaka ", "Dhaka");

// function findLastIndexOf(str, target) {
//     console.log("Original String :", str);
//     console.log("Target String :", str.lastIndexOf(target));
// };

// findLastIndexOf("Lalchand Dhaka ", "Dhaka dhaka radhika");

// function replaceString(str, target, replacement) {
//     console.log("Original String :", str);
//     console.log("Target String :", str.replace(target, replacement));
// };

// replaceString("Lalchand Dhaka ", "Dhaka", "radhika");


// const str = "Hello world";
//  const newstr = str.replace("world" ,"lalchand" );
//  console.log(newstr);

//split 



function splitString(str , separator) {
    console.log("Original String :", str);
    console.log("Target String :", str.split(separator));
}

splitString("Lalchand Dhaka", "");

// trim 

function trimString(str) {
    console.log("Original String :", str);
    console.log("Target String :", str.trim());
}

trimString("  Lalchand Dhaka  ");



// Number Method in JS;

// parseInt

function explainParseInt(value){
    console.log("Original Value" , value);
    let result = parseInt(value);
    console.log("After the Change" , result)
}

explainParseInt("24");
explainParseInt("24px");
explainParseInt("px24");
explainParseInt("2.14");
explainParseInt("24.004");

// parseFloat


// The parseFloat() function in JavaScript is similar to parseInt(), but it parses a string and converts it into a floating-point number (a number with decimal points). It works similarly to parseInt(), but it parses the string until it encounters a character that cannot be part of a floating-point number.



function explainParseFloat(value){
    console.log("Original Value" , value);
    let result = parseFloat(value);
    console.log("After the Change" , result)
}

explainParseFloat("24");
explainParseFloat("24px");
explainParseFloat("00.234");
explainParseFloat("2413.00000528")




