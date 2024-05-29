# dom-creation-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Does the `document.createElement()` method insert a new element into the page?
  no, it just creates element but does not insert into the page
- How do you add an element as a child to another element?
  append child method
- What do you pass as the arguments to the `element.setAttribute()` method?
  1st argument - string of the attribute you are trying to create/upgrade, 2nd argument - value that you would like to assign to that attribute
- What steps do you need to take in order to insert a new element into the page?
  create new element using document.createElement, set any attributes/properties for the new element, find location where you want to insert new element, add new elements into the DOM using appendchild, append, prepend.
- What is the `textContent` property of an element object for?
  represents text content of the node and its descendants as a single string. You can do getting/setting text content.
- Name two ways to set the `class` attribute of a DOM element.
  class name and set attribute
- What are two advantages of defining a function to do create something (like the work of creating a DOM tree)?
  reusability, test functions, maintainable, readability.

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
