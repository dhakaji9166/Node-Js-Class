
//push

// function pushExplain( arr , element){
//     console.log("origia array" , arr)
//     arr.push(element)
//     console.log("new array" , arr)
// }

// pushExplain([1,2,3,4,5] , [6,35]);

//unshift

// function unshiftExplain( arr , element){
//     console.log("origia array" , arr)
//     arr.unshift(element)
//     console.log("new array" , arr)
// }

// unshiftExplain([1,2,3,4,5] ,6);

// function unshiftExplain( arr , ...element){
//     console.log("origia array" , arr)
//     arr.unshift(...element)
//     console.log("new array" , arr)
// }

// unshiftExplain([1,2,3,4,5] ,6,33);

//shift

// function shiftExplain( arr , element){
//     console.log("origia array" , arr)
//     arr.shift(element)
//     console.log("new array" , arr)
// }

// shiftExplain([1,2,3,4,5] ,);

//concat 

function concatExplain( arr , ...element){
    console.log("origia array" , arr)
    const newArr = arr.concat(...element)
    console.log("new array" , newArr)
}

concatExplain([1,2,3,4,5] ,6,4,5);


