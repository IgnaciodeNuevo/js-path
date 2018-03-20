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
