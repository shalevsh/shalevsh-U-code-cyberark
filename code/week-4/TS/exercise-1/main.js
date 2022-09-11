"use strict";
const arr = [10, 20, 50];
function sumArr(arr) {
    let sum = 0;
    arr.forEach((element) => {
        sum += element;
    });
    return sum;
}
function isEven(num) {
    return num % 2 === 0 ? true : false;
}
