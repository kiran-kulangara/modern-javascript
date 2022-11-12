### Notes
- A variable assigned to an object stores not the object itself, but its “address in memory” – in other words “a reference” to it.
- When an object variable is copied, the reference is copied, but the object itself is not duplicated.

- Two objects are equal only if they are the same object.

- For instance, here `a` and `b` reference the same object, thus they are equal:
```
let a = {};
let b = a; // copy the reference

alert( a == b ); // true, both variables reference the same object
alert( a === b ); // true
```


- And here two independent objects are not equal, even though they look alike (both are empty):
```
let a = {};
let b = {}; // two independent objects

alert( a == b ); // false
```

- Const objects can be modified


#### Cloning and merging, Object.assign, structuredClone

We can also use the method Object.assign.

The syntax is:

- `Object.assign(dest, ...sources)`
- The first argument dest is a target object.
- Further arguments is a list of source objects.

Properties can be references to other objects and this can cause issues while cloning.

- The call `structuredClone(object)` clones the object with all nested properties.

- The structuredClone method can clone most data types, such as objects, arrays, primitive values.

- For eg., Function properties aren’t supported.

- To handle such complex cases we may need to use a combination of cloning methods, write custom code or, to not reinvent the wheel, take an existing implementation, for instance `_.cloneDeep(obj)` from the JavaScript library `lodash`.




