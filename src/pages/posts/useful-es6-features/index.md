---
title: Extremely useful ES6 features that we don’t use much 😱
date: "2015-04-08T22:40:32.169Z"
category: 'Programming'
---

ES6 brought many cool things to JS developers’ lives. But not everything is being used and talked about. Thus, I decided to bring your attention to those very useful and fresh features. Let’s start.

## Object.values(object)

If you are a JS developer, most probably you have already used `Object.keys()` (ES2015) in your code. But did you know that now you can also immediately get the values (ES2017)?

```
const obj = { first: 'banana', second: 'orange', third: 'kiwi' };
Object.keys(obj) // => ['first', 'second', 'third'];
Object.values(obj) // => ['banana', 'orange', 'kiwi'];
```

## Array destructuring

Wanna get the first element of an array? Yeah, sure => `yourArray[0]` . Second? NP, `yourArray[1]`. Wanna be more clear and good-looking? Your stylist suggests using the syntax below:

```
const [ first, second, third, ...rest ] = yourArray;
// variable first has the same value as yourArray[0] ~ it's the first item ;)
```

Yes, yes. That simple!

## String Interpolation

In ES5 you can’t hit `Enter` in the middle of the line; thus, you had to use a bunch of pluses and quotation marks like this:

```
// ES5
const str = "First line code and " + variable + "moreover \n" +
"something else written here" + " " + newVar
```

Remember? This is a disaster and we are finally saved!!! Yohooo

```
// ES6
const str = `First line code and ${variable} moreover
something else written here ${newVar}`
```

Using backticks (`) frees you from many headaches :)

## String padding

When you were just learning JS, most probably you have got tasks like “draw a triangle in terminal”, or “draw a Christmas tree”. If you had this tool back then, you would be the luckiest person there. :D Two new methods are added => `padStart` & `padEnd`. Due to this you can append or prepend an empty or other string to the one you have.

```
const myStr = 'a';
myStr.padEnd(10, 'b'); // "abbbbbbbbb" => length === 10
myStr.padStart(15); // "              a" => length === 15
```

So, it appends or prepends a new string so that a new string with length of mentioned number is created. If you don’t specify a specific char, it adds spaces by default.

## Final question! 🎉

```
// ES6
const greet = {
   first: 'hello',
   then: 'how are you?',
   and: 'no, no need of this'
}
const byeObject = {
   bye: 'stay well'
}
const { first, then } = greet;
const newCoolObject = { first, then, ...byeObject };
```

What will be the output of `console.log(newCoolObject)`?

