import express from 'express';
import pg from 'pg';
import { ClientError, errorMiddleware } from './lib/index.js';

const db = new pg.Pool({
  connectionString: 'postgres://dev:dev@localhost/studentGradeTable',
  ssl: {
    // Allow non-SSL traffic to localhost
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/grades', async (req, res, next) => {
  try {
    const sql = `select * from "grades"`;
    const result = await db.query(sql);
    res.status(200).json(result.rows);
  } catch (err) {
    next(err);
  }
});

app.get('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const sql = `
    select * from "grades"
    where "gradeId" = $1`;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    if (!grade) {
      throw new ClientError(404, 'grade does not exist in database');
    } else {
      res.status(200).json(grade);
    }
  } catch (err) {
    next(err);
  }
});

app.post('/api/grades', async (req, res, next) => {
  try {
    const { name, course, score } = req.body;
    if (
      !name ||
      !course ||
      typeof score !== 'number' ||
      score < 0 ||
      score > 100
    ) {
      throw new ClientError(
        400,
        'invalid gradeId, missing name, course, or score'
      );
    }
    const sql = `
    insert into "grades" ("name", "course", "score")
    values ($1, $2, $3)
    returning *`;
    const params = [name, course, score];
    const result = await db.query(sql, params);
    const grade = result.rows[0];
    res.status(201).json(grade);
  } catch (err) {
    next(err);
  }
});

app.put('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    const { name, course, score } = req.body;
    if (!gradeId) {
      throw new ClientError(400, 'invalid gradeId');
    }
    if (
      !name ||
      !course ||
      typeof score !== 'number' ||
      score < 0 ||
      score > 100
    ) {
      throw new ClientError(
        400,
        'invalid gradeId, missing name, course, or score'
      );
    }
    const sql = `
   update "grades"
   set "name" = $1, "course" = $2, "score" = $3
   where "gradeId" = $4
   returning *`;
    const params = [name, course, score, gradeId];
    const result = await db.query(sql, params);
    const updatedGrade = result.rows[0];
    if (!updatedGrade) {
      throw new ClientError(404, 'grade does not exist in database');
    }
    res.status(200).json(updatedGrade);
  } catch (err) {
    next(err);
  }
});

app.delete('/api/grades/:gradeId', async (req, res, next) => {
  try {
    const { gradeId } = req.params;
    if (!gradeId) {
      throw new ClientError(400, 'invalid gradeId');
    }
    if (!Number.isInteger(+gradeId)) {
      throw new ClientError(400, 'gradeId needs to be an integer');
    }
    const sql = `
  delete from "grades"
  where "gradeId" = $1
  returning *;`;
    const params = [gradeId];
    const result = await db.query(sql, params);
    const deleteGrade = result.rows[0];
    if (!deleteGrade) {
      throw new ClientError(404, 'grade does not exist in the database');
    }
    res.sendStatus(204);
  } catch (err) {
    next(err);
  }
});

app.use(errorMiddleware);

app.listen(8080, () => {
  console.log('listening on port 8080');
});
