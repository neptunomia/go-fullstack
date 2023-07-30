import { Thing } from '../models/thing.js';

const createThing = (req, res, next) => {
  // responds only to post type requests
  delete req.body._id;
  const thing = new Thing({
    ...req.body,
  });
  thing
    .save()
    .then(() => res.status(201).json({ Message: 'Thing saved successfully!' }))
    .catch((error) => res.status(400).json({ error }));
};

const modifyThing = (req, res, next) => {
  Thing.updateOne({ _id: req.params.id }, { ...req.body, _id: req.params.id })
    .then(() =>
      res.status(200).json({ message: 'Thing updated successfully!' })
    )
    .catch((error) => res.status(400).json({ error }));
};

const deleteThing = (req, res, next) => {
  Thing.deleteOne({ _id: req.params.id })
    .then(() =>
      res.status(200).json({ Message: 'Thing deleted successfully!' })
    )
    .catch((error) => res.status(400).json({ error }));
};

const getOneThing = (req, res, next) => {
  Thing.findOne({ _id: req.params.id })
    .then((thing) => res.status(200).json(thing))
    .catch((error) => res.status(404).json({ error }));
};

const getThings = (req, res, next) => {
  Thing.find()
    .then((things) => res.status(200).json(things))
    .catch((error) => res.status(400).json({ error }));
};

export { createThing, modifyThing, deleteThing, getOneThing, getThings };
