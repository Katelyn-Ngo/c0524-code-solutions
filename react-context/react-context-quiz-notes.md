# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  Context provides a way to pass data through the component tree without having to pass props down manually at every level.

- What values can be stored in context?
  any values even objects
- How do you create context and make it available to the components?
  1 - create the context and provide it a default value
  2 - wrap the components that need the context values in context's "provider"
  3 - use context values with the useContext hook.
  import create context from react and export it from a file so that your components can use it. createContext
- How do you access the context values?
  call useContext on the top level of your component to read and subscribe to context.
- When would you use context? (in addition to the best answer: "rarely")
  theming, current account, routing and managing state

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
