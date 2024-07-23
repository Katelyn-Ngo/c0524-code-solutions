# fetch-in-react-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What JavaScript function in the browser can be used in React to make HTTP requests to a server?
  fetch function
- What two things need to be done to properly handle HTTP request errors? Why?
  very response.ok to check response status. helps catch errors in 400s and 500s. this help indicates of the request is successful
  use a catch block to handle errors during request/response process. gracefully handling errors
- How can `useEffect` be used to load data for a component?
  it initializes fetch since its inside of useEffect function.
  dependency array control when the effects runs
- How do you use `useEffect` to load component data just once when the component mounts?
  by using empty dependency array to ensure the effect only runs once after component mounts
- How do you use `useEffect` to load component data every time the data key changes?
  dependency with key in it, runs every time key changes.
- In a large-scale production app, what are some better alternatives for loading and managing backend data?
  react query, vercel swr

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
