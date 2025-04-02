//using for loop

var array = [];
for (var i = 1; i <= 100; i++){
    array.push(i);
}

console.log(array);

var randomArray = [];

for(var i in array){
    var pos = Math.round(Math.random() * randomArray.length)
    randomArray.splice(pos, 0, array[i]);
}

console.log(randomArray);

// the sum of even numbers in the randomArray
var evensSum = 0;
for (var i = 0; i < randomArray.length; i++) {
    if (randomArray[i] % 2 === 0) {
        evensSum += randomArray[i];
    }
}
console.log("Sum of even numbers:", evensSum);