import express from 'express';

export const app = express();

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

app.post('/api/stuff', (req, res, next) => {
  // responds only to post type requests
  console.log(req.body);
  res.status(201).json({
    message: 'Objet créé !',
  });
});

app.get('/api/stuff', (req, res, next) => {
  const stuff = [
    {
      _id: 'oeihfzeoi',
      title: 'Mon premier objet',
      description: 'Les infos de mon premier objet',
      imageUrl:
        'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 4900,
      userId: 'qsomihvqios',
    },
    {
      _id: 'oeihfzeomoihi',
      title: 'Mon deuxième objet',
      description: 'Les infos de mon deuxième objet',
      imageUrl:
        'https://cdn.pixabay.com/photo/2019/06/11/18/56/camera-4267692_1280.jpg',
      price: 2900,
      userId: 'qsomihvqios',
    },
  ];
  res.status(200).json(stuff);
});
