// calcute sum 0  to 100 ;

function calculateSum() {
    let sum = 0;
    for (let i = 0; i <= 100; i++) {
        sum = sum + i;
    }
    console.log(sum);
}

calculateSum();

// calculate sum of even number 0 to 100 

function calculateSumOfEven() {
    let NumberOfSumEven = 0;

    for (let i = 0; i <= 100; i++) {

        if (i % 2 == 0) {
            NumberOfSumEven = NumberOfSumEven + i;
         
        }
       
    }
    return NumberOfSumEven;


}

console.log(calculateSumOfEven());



