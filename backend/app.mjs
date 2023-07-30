import express from 'express';
import mongoose from 'mongoose';
import dotenv from 'dotenv';
import { router } from './routes/stuff.js';

dotenv.config();

mongoose
  .connect(
    `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASSWORD}@cluster0.iaqu6bw.mongodb.net/?retryWrites=true&w=majority`,
    { useNewUrlParser: true, useUnifiedTopology: true }
  )
  .then(() => console.log('Connexion à MongoDB réussie !'))
  .catch(() => console.log('Connexion à MongoDB échouée !'));

const app = express();

app.use(express.json()); // intercept requests with 'application.json' Content-Type and provide body on request object (body-parser before)

app.use((req, res, next) => {
  // specific queries on the response object
  res.setHeader('Access-Control-Allow-Origin', '*'); // access the api from any origin
  res.setHeader(
    'Access-Control-Allow-Headers',
    'Origin, X-Requested-With, Content, Accept, Content-Type, Authorization' // add the mentioned headers to the requests sent to our API
  );
  res.setHeader(
    'Access-Control-Allow-Methods',
    'GET, POST, PUT, DELETE, PATCH, OPTIONS' // send requests with mentioned methods
  );
  next();
});

app.use('/api/stuff', router);

export { app };
