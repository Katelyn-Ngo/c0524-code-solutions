# array-filter-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- `Array.forEach`:

  - What does `Array.forEach` do?
    execute a provided function once for each array element.
  - What should the callback function do?
    execute each element in the array taking three arguments current value, index(optional), and array (optional)
  - What is `Array.forEach` useful for?

- `Array.map`:
  - What does `Array.map` do?
    creates a new array populated with the results of calling a provided function on every element in the calling array
  - What should the callback function return?
    called for every element of the array. each time callback executes, the returned value is added to the new array.
  - What is `Array.map` useful for?
- `Array.find`:
  - What does `Array.find` do?
    returns the value of the first element in the provided array that satisfies the provided testing function
  - What should the callback function return?
    execute on each value in the array until the function returns true.
  - What is `Array.find` useful for?
- `Array.filter`:

  - What does `Array.filter` do?
    creates a new array with all elements that pass the test implemented by the provided function.
  - What should the callback function return?
    function to test each element of the array. Function returns true to keep the element, false otherwise. Takes three arguments:
    element: The current element being processed in the array.
    index (Optional): The index of the current element being processed.
    array (Optional): The array filter was called upon.
  - What is `Array.filter` useful for?

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
