import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res, next) => {
  res.send('Hello Notes');
  next();
});

app.get('/notes', (req, res, next) => {
  res.send('get got them notes');
  next();
});

app.post('/notes/123', (req, res, next) => {
  res.send('note 123 has been created');
  next();
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
