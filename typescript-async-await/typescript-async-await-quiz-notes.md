# typescript-async-await-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the `async` and `await` keywords used for?
  The async function declaration creates a binding of a new async function to a given name. await keyword is used to indicate that javascript runtime should wait or pause until the asynchronous function completes.
- How do `async` and `await` differ from `Promise.then` and `Promise.catch`?
  gives us clearer code
- When do you use `async`?
  use async when you want to define a function that will handle asynchronous operations more gracefully with the await keyword.
- When do you use `await`? When do you _not_ use `await`? (What happens if you `await` a synchronous function?)
  when making API calls, performing file operations in environment lik Node.js, or database queries and chaining promises
  dont use await with functions that do not return promises
- How do you handle errors with `await`?
  wrap the await calls in a try..catch block
- What do `try`, `catch` and `throw` do? When do you use them?
  try block: contains one or more statements( use when have code that might throw error and want to handle errors gracefully)
  catch block: contain statements that specify what to do if an exception is thrown in the try block, catch block receives the error object as its argument(use to catch error that occur in try block and log error info for debugging)
  throw: used to create a custom error. (use to immediately terminate current function's execution)
- What happens if you forget to use `await` on a Promise? In that case, what happens to the Promise rejection?
  immediate execution continues and unhandled promise rejection
- Which style of asynchronous programming do you prefer — callbacks, `Promise.then`, or `async/await`? Why?
  async/await shorter code to write and easier to look at!

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
