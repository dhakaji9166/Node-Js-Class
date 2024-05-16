

// In JavaScript, the Date object represents a date and time. It allows you to work with dates, times, and time zones in your JavaScript code. You can create a Date object to represent the current date and time, or a specific date and time.


let currentDate = new Date();
let year  =currentDate.getFullYear();
let month =currentDate.getMonth();
let date = currentDate.getDate();
let Hours = currentDate.getHours();
let minutes = currentDate.getMinutes();
let seconds = currentDate.getSeconds();


// console.log("current date",currentDate);
// console.log("current Fullyear",year);
// console.log("current month",month);
// console.log("current date",date);
// console.log("current hours " + Hours);
// console.log("current minutes " + minutes);
// console.log("current seconds " + seconds);

console.log("Time in milliseconds since 1970", currentDate.getTime());



function calculateSum(){
    let sum = 0;
    for(let i =0 ; i<1000000 ; i++){
        sum = sum + i;
    }
    return sum;
}

// console.log(calculateSum());

const beforeDate = new Date();
const beforeDateTime = beforeDate.getTime();

calculateSum();

const afterDate = new Date();
const afterDateTime = afterDate.getTime();

console.log(afterDateTime - beforeDateTime);

function currentTimePrint(){
    console.log(new Date().getTime());
}

// setInterval(currentTimePrint,1000);

