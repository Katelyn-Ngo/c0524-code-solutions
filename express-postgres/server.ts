import express from 'express';
import { ClientError, errorMiddleware } from './lib/index.js';
import pg from 'pg';

const app = express();
const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/pagila',
  ssl: {
    rejectUnauthorized: false,
  },
});

app.get('/api/films', async (req, res, next) => {
  try {
    const sql = `
    select
    "title",
    "filmId"
    from "films"
    order by "replacementCost" desc;`;
    const result = await db.query(sql);
    res.send(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/film', async (req, res, next) => {
  try {
    const { filmId } = req.query;
    if (filmId === undefined) {
      throw new ClientError(400, 'filmId is required');
    }
    const sql = `
    select *
    from "films"
    where "filmId" =  $1;
    `;
    const params = [filmId];
    const result = await db.query(sql, params);
    const film = result.rows[0];
    if (!film) {
      throw new ClientError(400, `film ${filmId} not found`);
    }
    res.send(film);
  } catch (err) {
    next(err);
  }
});

app.put('/api/film', async (req, res, next) => {
  try {
    const { filmId, title } = req.query;
    if (!filmId || !title) {
      throw new ClientError(400, 'filmId and title are required');
    }
    const sql = `
    update "films"
    set "title" = $1
    where "filmId" = $2
    returning *
    `;
    const params = [title, filmId];
    const result = await db.query(sql, params);
    if (result.rows.length === 0) {
      throw new ClientError(400, `filmId ${filmId} is not found`);
    }
    res.send(result.rows[0]);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
