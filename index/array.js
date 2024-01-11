'use strict';

const fruits = ['apple', 'banana', 'coconut', 'melon', 'tomato'];
console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[fruits.length-1]);

console.clear();
for(let i=0 ; i<fruits.length ; i++){
    console.log(fruits[i]);
}

console.clear();
fruits.forEach((value) => {console.log(value);})

console.clear();
let copy = fruits.slice();
console.log(copy);

