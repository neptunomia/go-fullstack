import express from 'express';

export const app = express();

app.use((req, res, next) => {
  console.log('Requête reçue !');
  next();
});
app.use((req, res, next) => {
  res.json({ message: 'Votre requête a bien été reçue !' });
});
