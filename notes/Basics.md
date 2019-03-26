# JavaScript Basics

## LocalStorage

localStorage is a key: value pair

| Method        | Description                        |
| ------------- |:----------------------------------:|
| setItem()     | Add key and value to local storage |
| getItem()     | Retrieve a value by the key        |
| removeItem()  | Remove an item by key              |
| clear()       | Clear all storage                  |

### Usage

**setItem()**

`localStorage.setItem('key', 'value');`

**getItem()**

`localStorage.getItem('key');`

**removeItem()**

`localStorage.removeItem('key');`

**clear()**

`localStorage.clear();`

## JavaScript Methods

### [.parse()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/JSON/parse)

`JSON.parse()`: parses a JSON string, constructing the JavaScript value or object described by the string. An optional reviver function can be provided to perform a transformation on the resulting object before it is returned.

```
var json = '{"result":true, "count":42}';
obj = JSON.parse(json);

console.log(obj.count);
// expected output: 42

console.log(obj.result);
// expected output: true
```

### [.slice()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/slice)

`variable.slice(beginIndex, endIndex)`: extracts a section of a string and returns it as a new string, without modifying the original string. The first number (`beginIndex`) in parentheses is the nombre of the character that begins the slice, and the second number (`endIndex`) is the number of the character after the last character in the slice.

```
var name = 'Carlos y Juan son amigos';
var nameResult = name.slice(0, 13);

console.log(nameResult);
// expected output: Carlos y Juan
```

### [.toUpperCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toUpperCase)

- Used in: *string*.

`variable.toUpperCase()`: returns the calling string value converted to uppercase (the value will be converted to a string if it isn't one).

```
var name = 'patata';
var name = name.toUpperCase;

console.log(name);
// expected output: PATATA
```

### [.toLowerCase()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/toLowerCase)

Used in: *string*.

`variable.toLowerCase()`: returns the calling string value converted to lower case.

```
var name = 'PATATA';
var name = name.toUpperCase;

console.log(name);
// expected output: patata
```

### [.push()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/push)

- Used in: *array*.
- Modifies the array: *yes*

`array.push(item)`: adds one or more elements to the end of an array and returns the new length of the array.

```
var animals = ['pigs', 'goats', 'sheep'];
var item = 'cow';
animals.push(item);

// expected output: [ "pigs", "goats", "sheep", "cow" ]
```

### [.unshift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/unshift)

- Used in: *array*.
- Modifies the array: *yes*

`array.push(item)`: adds one or more elements to the beginning of an array and returns the new length of the array.

```
var array1 = [1, 2, 3];
var array2 = 0;
array1.unshift(array2);

// expected output: Array [0, 1, 2, 3]
```

### [.pop()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/pop)

- Used in: *array*.
- Modifies the array: *yes*

`array.pop(item)`: removes the last element from an array and returns that element. This method changes the length of the array.

```
var plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];

console.log(plants.pop());
// expected output: "tomato"
```


### [.shift()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/shift)

- Used in: *array*.
- Modifies the array: *yes*

`array.shift(item)`: removes the first element from an array and returns that removed element. This method changes the length of the array.

```
var array1 = [1, 2, 3];
var firstElement = array1.shift();

console.log(array1);
// expected output: Array [2, 3]
```



### [.concat()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/concat)

- Used in: *array*.
- Modifies the array: *no*

`array.concat(otherArray)`:  is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```
var array1 = ['a', 'b', 'c'];
var array2 = ['d', 'e', 'f'];

console.log(array1.concat(array2));
// expected output: Array ["a", "b", "c", "d", "e", "f"]
```


### [.indexOf()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/indexOf)

- Used in: *string or array*.

`array.indexOf(otherArray)`:  is used to merge two or more arrays. This method does not change the existing arrays, but instead returns a new array.

```
var paragraph = ['red', 'pink', 'orange'];
var res = paragraph.indexOf('pink');

// expected output: 1
```



### [.join()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/join)

- Used in: *array*.

`array.join()`: creates and returns a new string by concatenating all of the elements in an array (or an array-like object), separated by commas or a specified separator string. If the array has only one item, then that item will be returned without using the separator.

```
var paragraph = ['red', 'pink', 'orange'];
var res = paragraph.join();
console.log(res);

// expected output: 'red, pink, orange';

var paragraph = ['red', 'pink', 'orange'];
var res = paragraph.join('-');
console.log(res);

// expected output: 'red-pink-orange';
```

## How to organize your JavaScript Classes

- Business logic: where you calculate based on the data you have
- Persistence: where you store the data you have
- UI: where you get or paint data in the interface


## Falsy values

- false
- null
- undefined
- NaN
- number 0
- empty string ""


## null vs undefined

- null: value of nothing
- undefined: absence of value

## Async Cheatsheet

- [Async Cheatsheet](https://raw.githubusercontent.com/frontarm/async-javascript-cheatsheet/master/async-cheatsheet.png)
