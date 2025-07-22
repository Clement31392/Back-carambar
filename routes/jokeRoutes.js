import express from 'express';
const router = express.Router();
import jokeController from '../controllers/jokeController';

router.post('/', jokeController.createJoke);
router.post('/jokes', jokeController.addJoke);
router.get('/', jokeController.getAllJokes);
router.get('/random', jokeController.getRandomJoke);
router.get('/:id', jokeController.getJokeById);

export default router;