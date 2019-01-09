---
title: 5 anomalies of JavaScript, aka edge cases
date: "2015-05-06T23:46:37.121Z"
category: 'Programming'
---

Hello! Today we are going to discuss 10 anomalies of JavaScript which are the outputs that you would never expect normally. These cases are called edge cases for being too far away from core logic. Let’s get started!

> Attention! These cases are often asked during interviews ;)

### 1) 0.1 + 0.2 === 0.3 // false

Well, this is a real edge case cause no one can clearly define why it is so. This is one of the side effects of working with binary floating-point numbers. This is true of all languages that use IEEE 754, and it’s not directly related to JavaScript.

```
0.1 + 0.3 === 0.4 //true
0.5 + 0.2 === 0.7 //true
0.4 + 0.5 === 0.9 //true 
...
0.1 + 0.2 === 0.3 // false, whaaat?
0.1 + 0.7 === 0.8 // false, huh...
```

> Explanation: Actually, 0.1 + 0.2 is approximately equal to 0.30000000000000004… and 0.1 + 0.7 is equal to ~0.7999999999999999 based on IEEE 754 standards.

Just be attentive while using floating numbers and you can find a solution for this at [YerevanCoder's post](https://yerevancoder.com/2018-03-06-javascript-edge-cases/).

### 2) 4 — “- 4” === 8 // true

If we have `4 + '-4'` , we will get `'4-4'` . As number 4 just changes its type to be concatenated as strings. However, the same will not happen in the case of distraction as there is no such operation for strings. Thus, the string will change its type to number because subtracting is a number-specific operation. Ta-da-da-daam! We got 8. This is an effect of type casting or coercion in JavaScript.

### 3) { } + [ ] === 0 // true

This one should completely blow your mind. :)) This may become even more interesting if I say that `[] + {} === 0 => false`.

> Explanation: Let’s explore the first case. The {} is recognized as a block scope not as an object which means it just enters and leaves the scope. Then we are left with + [] which changes the type of whatever follows the + to number. So we got that {} + [] === 0 . Why not the same when we change the places of them? Well, {} is considered to be an object in that case and both sides are converted to primitives which evokes toString() method and we get "" + "[object Object]" = "[object Object]" .

### 4) a == !a // true

We have the following given:
```
let a = [];
```
As you may already know double equal sign conducts just a shallow comparison. It coerces the types until it gets the same type.

> Explanation: In this case, variable `a` has a reference to an empty array. And `!a` has a value of `false` as `!` operation changes the type to `Boolean`. So, both sides are coerced to numbers and both sides are falsie => `Number([]) === 0 && Number(false) === 0`. Thus, we get what we have: `a == !a`.

### 5) function hello returns a string, but hello() // undefined

Look at this function. What would be its output?

```
function hello() {
   return
      "Hi there!";
};
```

From the first glance, this is a simple function that returns a string.

Whoops! It returns `undefined` :/

> Explanation: There is a feature in JS called Automatic Semicolon Insertion (ASI) that in some cases automatically adds semicolons at the end of the line and separates it from the continuation. This is why in many cases it’s optional to put semicolons in JS. But sometimes it may result in problems.This is exactly the case. It puts a semicolon after return and it becomes `return;` which means return undefined. To fix this you should bring the string to the same line or add parenthesis like below.

```
function hello() {
   return(
      "Hi there!"
   );
};
```
