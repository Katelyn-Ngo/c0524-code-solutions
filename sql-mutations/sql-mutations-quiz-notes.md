# sql-mutations-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are the SQL _CRUD_ operations?
  Create, read, update, delete
- How do you add a row to a SQL table?
  use INSERT INTO " "
  VALUES ''
- How do you add multiple rows to a SQL table at once?
  have multiple values in ()
- How do you update rows in a database table?
  use UPDATE and WHERE
- How do you delete rows from a database table?
  use DELETE FROM and WHERE
- Why is it important to include a `where` clause in your `update` and `delete` statements?
  to avoid removing ALL rows unintentionally.
- How do you accidentally delete or update all rows in a table?
  by NOT using WHERE clause
- How do you get back the modified row without a separate `select` statement?
  use RETURNING clause in INSERT, UPDATE, OR DELETE statements.
- Why did you get an error when trying to delete certain films?
  because of foreign key constraints / other database constraints.

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
