# express-postgres-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of the `pg` NPM package?
  to interact with postgreSQL databases from a node.js application
- How do you tell `pg` which database to connect to?
  vid a configuration object or a connection string when creating a 'pool' or 'client'
- How do you send SQL to PostgreSQL from your Express server?
  use the 'query' method of the pool or client
- How do you get the rows return from the SQL query?
  access the 'rows' property of the result object return by the 'query' method
- What must you always remember to put around your asynchronous route handlers? Why?
  wrap them in a 'try-catch' block or use an error handling middleware to handle exceptions and avoid unhandled promise rejections
- What is a SQL Injection Attack and how do you avoid it in `pg`?
  an unintended data enters the program from an untrusted source and execute arbitrary sql code by manipulation query inputs. AVOID by using parameterized queries (`query ('select * from users where id = $1, [userId])`)

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
