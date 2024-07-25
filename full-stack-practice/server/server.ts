import pg from 'pg';
import express from 'express';
import { ClientError, errorMiddleware } from './lib';
import 'dotenv/config';

const db = new pg.Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: {
    rejectUnauthorized: false,
  },
});

const app = express();
app.use(express.json());

app.get('/api/products', async (req, res, next) => {
  try {
    const sql = `select * from products`;
    const result = await db.query(sql);
    res.json(result.rows);
  } catch (err) {
    next(err);
  }
});
// make sure product id is an interger
app.get('api/products/:productId', async (req, res, next) => {
  try {
    const { productId } = req.params;
    const sql = `select * from "products"
     where "productId" = $1`;
    const params = [productId];
    const result = await db.query(sql, params);
    const product = result.rows[0];
    if (!product) {
      throw new ClientError(404, 'product does not exist in database');
    } else {
      res.status(200).json(product);
    }
  } catch (err) {
    next(err);
  }
});

// app.post('api/products', async (req, res, next) => {
//   try {
//     const {name, price, imageUrl, shortDescription, longDescription} = req.body;
//     const sql = `
//     insert into "products" ("name, "price", "imageUrl", "shortDescription", "longDescription" )
//     values ($1, $2, $3, $4, $5)
//     returning *`;
//     const params = [name, price, imageUrl, shortDescription, longDescription];
//     const result = await db.query(sql, params);
//     const newProduct = result.rows[0];
//     res.status(201).json(newProduct)
//   } catch (err) {
//     next(err)
//   }
// })

app.use(errorMiddleware);

app.listen(process.env.PORT, () => {
  console.log(`express server listening on port ${process.env.PORT}`);
});
