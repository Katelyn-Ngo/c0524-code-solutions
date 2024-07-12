# typescript-modal-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the `<dialog>` element used for?
<dialog> element is used to create both modal and non-modal dialog boxes. Modal dialog boxes interrupt interaction with the rest of the page being inert, while non-modal dialog boxes allow interaction with the rest of the page.

- How do you show and hide a modal dialog?
  showModal and close methods.
- How do you manipulate child components in React? Why will that no work for the `<dialog>` element?
Passing Props: Pass data or functions from parent to child components to control their behavior.
Using Refs: Access a child component's DOM element directly using useRef()
<dialog> elements have native methods like show() and close() which aren't exposed via props or standard React patterns.

- How do you call the dialog element's functions in React?
  useRef() use the current property of the ref object to get access to close and show modal
- How can you render nested components or JSX elements in React?
  Nest JSX elements or components directly within other components.
  Children Prop: Pass components or JSX as children.

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
