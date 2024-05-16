
// "Callbacks in JavaScript are functions passed as arguments to other functions, executed after a particular task completes. They're commonly used in asynchronous operations.



// function getdata(callback) {
//     setTimeout(() => {
//         const value = "Hello World!";
//         callback(value);
//     }, 2000);
// }

// function setdata(itme) {
//     console.log("complete getdata", itme);
// }

// getdata(setdata);

// function abcd(a, b, callback) {
//     setTimeout(() => {
//         const sum = a + b;
//         callback(sum);
//     }, 4000);
// }

// function dcba(sum) {
//     console.log(sum);
// }

// abcd(10, 20, dcba);



// callback hell 

// function getData(getId, getNextData) {
//     setTimeout(() => {
//         console.log("getData", getId);
//         if (getNextData) {
//             getNextData();
//         }

//     }, 2000);
// }

// getData(1, () => {
//     console.log("getData 2 is loading");
//     getData(2, () => {
//         console.log("getData 3 is loading");
//         getData(3, () => {
//             console.log("getData 4 is loading ....")
//             getData(4, () => {

//                 getData(5, () => {
//                     getData(6, () => {
//                         getData(7, () => {
//                             getData(8, () => {
//                                 getData(9, () => {
//                                     getData(10, () => {
//                                         console.log("complete");
//                                     })
//                                 })
//                             })
//                         })
//                     })
//                 })
//             })
//         })
//     })
// });


// CALLBACK 


function square(n) {
    return n * n;
}

function cube(n) {
    return n * n * n;
}

function multiple(n) {
    return n * n * n * n;
}

function somethingDoes(a, b, fn) {
    let number1 = fn(a);
    let number2 = fn(b);
    return number1 + number2;
}

let answer = somethingDoes( 2, 3, square);
let answer2 = somethingDoes( 3, 4, cube);
let answer3 = somethingDoes(4,5 , multiple);

console.log(answer);
console.log(answer2);
console.log(answer3);