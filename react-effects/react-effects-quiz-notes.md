# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  initial phase in which the instance of the component is created and inserted in to the DOM. When the components get called, the first time it becomes
  react effect are caused by rendering itself rather than particular interaction

- What is react effect?
  functions get ran as a result rendered
- When should you use an Effect and when should you not use an Effect?
  if there is no external system involved, no need to use effect. use react when you need to step outside react and when there is no better built-in solution for your use case.
- When do Effects run?
  effects run after every render(including the initial one). only run after dependencies changed.
- What function is used to declare an Effect?
  useEffect()
- What are Effect dependencies and how do you declare them?
  The list of all reactive values referenced inside of the setup code. Reactive values include props, state, and all the variables and functions declared directly inside your component body. Effect's dependency list is determined by the surrounding code. [ dependiencies, dependencies, ....]as a second argument to use effect. use effect takes a callback function
- Why would you want to clean up from an Effect?
  if your Effect breaks because of remounting, you need to implement a cleanup function. avoids memory leaks
- How do you clean up from an Effect?
  return a cleanup function
- When does the cleanup function run?
  react will call your cleanup function before the effect runs next time, and during the unmount

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
