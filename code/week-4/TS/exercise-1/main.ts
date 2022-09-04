const arr: number[] = [10, 20, 50];

function sumArr(arr: number[]):number{
let sum = 0;
arr.forEach((element) => {
  sum += element;
})
return sum
}

function isEven(num: number):boolean{
return num%2 ===0 ? true:false;
}