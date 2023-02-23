//let random = Math.random();

function makeRandom() {
  let random = Math.random();

  return function() {
    return random;
  }
}

let random1 = makeRandom();

console.log(random1());
console.log(random1());

let random2 = makeRandom();
console.log(random2());
console.log(random2());
console.log(random2());
