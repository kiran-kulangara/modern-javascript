// Output a single-linked list
// importance: 5
// Let’s say we have a single-linked list (as described in the chapter Recursion and stack):

let list = {
  value: 1,
  next: {
    value: 2,
    next: {
      value: 3,
      next: {
        value: 4,
        next: null
      }
    }
  }
};
// Write a function printList(list) that outputs list items one-by-one.

// Make two variants of the solution: using a loop and using recursion.

// What’s better: with recursion or without it?


function printListRecursive(obj) {
  console.log(obj.value);

  if (obj.next) {
    printListRecursive(obj.next)
  }
}

function printListIterative(obj) {
  console.log(obj.value);
  while(obj.next) {
    obj = obj.next;
    console.log(obj.value);
  }
}



printListRecursive(list)
printListIterative(list)
