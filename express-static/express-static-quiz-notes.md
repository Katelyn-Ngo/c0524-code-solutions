# express-static-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the Express Static middleware?
  to serve static files like HTML, CSS, javascript, images, and fonts directly from the server. serve static resources that client can access as needed

- What does `express.static()` return?
  express.static() returns a middleware function that serves static files from a specified directory
- What are several examples of static files?
  HTML files (index.html) css files (styles.css), javascript(app.js)
- What is a good way to serve application images using Express?
  use express.static('public) to declare the directory 'public' as a repository for static files to serve images from a directory.
  created directory named images in public directory
  use forward slash / like this <img src="/images/dog1.jpg" alt="dog1">

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
