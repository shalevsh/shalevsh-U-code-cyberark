function foo() {
  let sum = 0;
  for (let i = 1000; i < 2000; i++) {
    if (i % 203 === 0) {
      sum += getSecondDigit(i);
    } else if (i % 497 === 0) {
      sum += getLastDigit(i);
    } else if (i % 293 === 0) {
      sum += getLastDigit(i * 13);
    }
  }
  return sum;
}


function getSecondDigit(number){
    return parseInt(number.toString().split("")[0])
}

function getLastDigit(number){
    return parseInt(number.toString().split("")[number.length - 1])
}

foo()


function getSecondDigit(number) {
  return parseInt(number.toString().split("")[0]);
}

function getLastDigit(number) {
  return parseInt(number.toString().split("")[number.length - 1]);
}

let res =foo();
console.log(res,"res");