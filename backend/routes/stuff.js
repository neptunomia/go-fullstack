import express from 'express';
import {
  createThing,
  modifyThing,
  deleteThing,
  getOneThing,
  getThings,
} from '../controllers/stuff.js';

const router = express.Router();

router.post('/', createThing);
router.put('/:id', modifyThing);
router.delete('/:id', deleteThing);
router.get('/:id', getOneThing);
router.get('/', getThings);

export { router };
