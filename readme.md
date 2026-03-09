# JavaScript Essentials Quick Guide

### 1.  What is the difference between var, let, and const? 

- **var** is function-scoped and has been around since the early days of JavaScript.
- **let** is block-scoped and was introduced in ES6, offering a more predictable scoping mechanism. It cannot access from outside of that scoped it decleard.
- **const** is also block-scoped and is used to declare constants that cannot be reassigned after initialization.

---

### 2. What is the spread operator (... )? 

Spread operator (…) is a special syntax in JavaScript that allows us to expand elements from an array or object into individual elements. Think of it like “spreading” things out into their own individual parts. It's commonly used with arrays and objects.

---

### 3. What is the difference between map(), filter(), and forEach()

#### Return Value
- `map()` will return a **new array** as per the conditions applied.
- `forEach()` will not return anything. `forEach()` returns `undefined`.
- `filter()` method will return an array of matching elements else will return an empty array if no matching happens.

#### Usage
- If we have a requirement to modify the current array and are expecting a modified one, then we should go with `map()`.
- If we need to just iterate the array, then we can use `forEach()`.
- If we expecting filtered values from a given array then we should use the `filter()` method.

#### Function Chaining
- As `forEach()` returns undefined, we can not attach other functions like `filter()` with it.
- We can easily apply `filter()` with `map()`.
- Other JavaScript methods can be attached with the `filter()` method.

---

### 4. What is an arrow function?

Arrow functions are a new way to write anonymous function expressions. Arrow functions is not like the traditional function. Everything before the arrow is arguments of the function and everything after the arrow is always returned as the result of the function. We can write down arrow function in multiple way.  

- **Single Line Method :** `const arrowFunction = (arg1, arg2) => arg1 + arg 2;` --- No need to use return keyword to return anything.
- **Multiline method is :** ```javascript
let sum = (a, b) => {
 let result = a + b;
 return result;
};

### 5. What are template literals? 

Template literals are literals delimited with **backtick** ( ` ) characters, allowing for:
* **Multi-line strings**: Writing strings across multiple lines without needing escape characters.
* **String interpolation**: Embedding expressions directly within the string using `${expression}`.

Template literals are a more flexible and powerful way to define strings in JavaScript compared to normal strings.