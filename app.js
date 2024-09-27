import cors from 'cors';
import pkg from 'body-parser';
import { routespace } from './routes/routes.js';
import express from 'express';
const app = express()
const port = 3000

const { json } = pkg;

app.use(cors());
app.use(json());

app.use(routespace);

app.listen(port, () => {
  console.log(`Server running on port ${port}`)
})