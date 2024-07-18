import express from 'express';

const app = express();

app.use((req, res, next) => {
  console.log('The date is', new Date(), req.method, req.path);
  next();
});

app.get('/', (req, res) => {
  res.send('Hello Notes');
});

app.get('/notes', (req, res) => {
  res.send('get got them notes');
});

app.post('/notes/123', (req, res) => {
  res.send('note 123 has been created');
});

app.listen(8080, () => {
  console.log('Express server listening on port 8080');
});
