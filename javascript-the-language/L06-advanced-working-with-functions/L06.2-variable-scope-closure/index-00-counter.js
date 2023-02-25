//let count = 0;

function makeCounter() {
  let count = 0;

  return function() {
    return count++;
  }
}

let counter1 = makeCounter();

console.log(counter1());
console.log(counter1());

let counter2 = makeCounter();
console.log(counter2());
console.log(counter2());
console.log(counter2());
