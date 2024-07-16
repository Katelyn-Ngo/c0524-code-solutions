# javascript-conditionals-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- In JavaScript, when is scope determined?
  scope is determined at the time of writing the code
- What allows JavaScript functions to "remember" variables from their surroundings?
  closures allow javascript functions to remember variables from their surroundings
- What values does a closure contain?
  closure contains function itself and references to the variables from scope
- When is a closure created?
  closure is created when a function is defined not when its executed
- How can you tell if a function will be created with a closure?
  If a function is defined inside another function and references variables from the outer function
- In React, what is one important case where you need to know if a closure was created?
  when using useEffect or useCallback to avoid stale closures and ensure that latest state is updated.

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
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
