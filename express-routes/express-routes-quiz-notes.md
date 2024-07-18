# express-routes-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the conventional HTTP methods for each of the CRUD operations? Is the server required to implement the methods according to this convention?
  POST, GET, PUT DELETE
- What is Express middleware?
  express maps routes to functions, a function that fulfills the requested action. Middleware functions are functions that have access to the request object (req), the response object (res), and the next middleware function in the application’s request-response cycle
- What is Express middleware useful for?
  Execute any code.
  Make changes to the request and the response objects.
  End the request-response cycle.
  Call the next middleware function in the stack.
- How do you mount a middleware with an Express application?
  app.use method
- Which objects does an Express application pass to your middleware to manage the request/response lifecycle of the server?
  req (request) : HTTP request and has properties for the request query string, parameters, body, HTTP headers
  res (response) : HTTP response that an express app sends when it gets an http request
  next function when called executes the next middleware function in stack .

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
