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