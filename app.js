//using for loop
function generateArray() {
    const array = [];
    for (let i = 1; i <= 100; i++){
        array.push(i);
    }
 
    return array;

};


function shuffleArray(array) {
    const randomArray = [];

    for(let i in array){
        var pos = Math.round(Math.random() * randomArray.length)
        randomArray.splice(pos, 0, array[i]);
    }

    
    return randomArray;

};

// the sum of even numbers in the randomArray

function sumEvenNumbers(randomArray) {
    let evensSum = 0;
    for (let i = 0; i < randomArray.length; i++) {
        if (randomArray[i] % 2 === 0) {
            evensSum += randomArray[i];
        }
    }
    
    return evensSum;
};

function showAll() {
    const array = generateArray(1, 100);
    console.log("Original array:", array);

    const randomArray = shuffleArray(array);
    console.log("Shuffled array:", randomArray);

    const evenSum = sumEvenNumbers(randomArray);
    console.log("Sum of even numbers:", evenSum);
}

showAll();