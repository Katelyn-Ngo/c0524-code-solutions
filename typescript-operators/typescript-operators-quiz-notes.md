# typescript-operators-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `&&` (logical AND) and `||` (logical OR) operators and how can they be used outside of `if` statements?
  && get truthy value back and get the value from right &&. logical OR check for falsy and get the value from the left ||.
- What is "short-circuit evaluation" and how does it apply to `&&` and `||`?
  as soon as something evaluates to true it stops!!!
- What is the `??` (nullish coalescing) operator and how does it differ from `||`?
  logical OR take any falsy value ?? ONLY takes null or undefined value.
- What is the `?:` (ternary) operator? How does it differ from `if/else`?
  ?: evaluates first thing to the left of question mark. if its true get value on the left of : if falsy gets the value on the right of :
- What is the `?.` (optional chaining) operator? When would you use it?
  use to check if theres a value in a property
- What is `...` (spread) syntax? How do you use it with arrays and objects?
  Allows an iterable such as an array or a string to be expanded in places where zero or more arguments or elements are expected, or an object expression to be expanded in places where zero or more key-value pairs are expected.
  arrays [...array youre accessing]
  objects {... object youre acessing}
- What data types can be spread into an array? Into an object?
  arrays: letters, words, strings, things that are iterables
  objects: anything
- How does spread syntax differ from rest syntax?
  spread syntax: spreading object/array into another object/array. Rest syntax is used when destructuring and functions

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```js
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
