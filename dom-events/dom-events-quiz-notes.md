# dom-events-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  it prints messages to the console and it can help with debugging
- What is the purpose of events and event handling?
  they are essential for creating interactive and dynamic web applications. Events are actions/occurrences that happen in the browser(clicking a button, submitting a form, hovering over an element). Event Listeners are functions that will wait for and respond to these events.
- Are all possible parameters required to use a JavaScript method or function?
  no
- What method of element objects lets you set up a function to be called when a specific type of event occurs?
  addEventListeners
- What is a callback function?
  Callback function is a function passed into another function as an argument. in event handling, callback functions are used to respond to events triggered by user interactions/asynchronous actions.
- What object is passed into an event listener callback when the event fires?
  the event object
- What is the `event.target`? If you weren't sure, how would you check? Where could you get more information about it?
  it refers to the element that is responsible for firing the event. it prints the HTML representation of the element. You can get more information by the event log object without target.
- What is the difference between these two snippets of code?
  ```js
  element.addEventListener('click', handleClick);
  ```
  ```js
  element.addEventListener('click', handleClick());
  ```
  first snippet we are passing the callback function and second snippet the callback function is being called

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
