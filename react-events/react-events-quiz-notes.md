# react-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is an "event" in React?
  an action like a click or key press or form submission that can trigger a response in the application
- What is an "event handler"? Which component declares the handler?
  a function that runs when an event occurs. the component that needs to handle the event declares this function.
- How do you pass an event handler to a React component?
  you pass it as prop from the parent component to the child component.
- What is the naming convention for event handlers?
  camelCase, prefix with 'handle'
- What is an "event handler prop"? Which component declares the prop?
  a prop designed to pass an event handler function to a child component. the parent declares the function and the child declares the prop
- What are some custom event handler props a component may wish to define?
  onButtonClick and onFormSubmit, onMouseOver
- What is the naming convention for custom event handler props?
  prefix with 'on', camelCase for prop name

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
