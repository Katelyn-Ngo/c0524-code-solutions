# dom-query-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- Why do we log things to the console?
  javascript console debugging tool. The browser prints errors and warnings as they occur in javascript code.
- What is a "model"?
  a representation of something else.
- Which "document" is being referred to in the phrase Document Object Model?
  webpage HTML document
  it is the root node that have access to all descendants
- What is the word "object" referring to in the phrase Document Object Model?
  HTML document is represented of objects
  a javascript object whose properties should be printed
- What is a DOM Tree?
  Tree-like structures of HTML elements. Each web page is modeled as a tree of objects, with HTML document as roots and other elements (body, header, div, etc) as branches and leaves.
- Give two examples of `document` methods that retrieve a single element from the DOM.
  querySelector(selector), getElementById(id)
- Give one example of a `document` method that retrieves multiple elements from the DOM at once.
  querySelectorAll(selector)
- Why might you want to assign the return value of a DOM query to a variable?
  easier to reference, saving time to re query each time.
- What `console` method allows you to inspect the properties of a DOM element object?
  console.dir
- Why would a `<script>` tag need to be placed at the bottom of the HTML content instead of at the top?
  make sure document is loaded. The browser needs to parse all of elements in HTML page before the Javascript code can access them.
- What does `document.querySelector()` take as its argument and what does it return?
  a string, a CSS selector as argument and returns first element that matches a specified CSS selector
- What does `document.querySelectorAll()` take as its argument and what does it return?
  selector as argument and returns a Nodelist of all elements in the document that match a specified CSS selector

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
