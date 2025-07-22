const express = require('express');
const router = express.Router();
const jokeController = require('../controllers/jokeController');

router.post('/', jokeController.createJoke);
router.get('/', jokeController.getAllJokes);
router.get('/random', jokeController.getRandomJoke);
router.get('/:id', jokeController.getJokeById);

module.exports = router;
controllers / jokeController.js
js
Copier
Modifier
const { Joke } = require('../models');

exports.createJoke = async (req, res) => {
    try {
        const joke = await Joke.create({ content: req.body.content });
        res.status(201).json(joke);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

exports.getAllJokes = async (req, res) => {
    const jokes = await Joke.findAll();
    res.json(jokes);
};

exports.getJokeById = async (req, res) => {
    const joke = await Joke.findByPk(req.params.id);
    joke ? res.json(joke) : res.status(404).json({ error: 'Not found' });
};

exports.getRandomJoke = async (req, res) => {
    const jokes = await Joke.findAll();
    const random = jokes[Math.floor(Math.random() * jokes.length)];
    res.json(random);
}; exports.addJoke = async (req, res) => {
    try {
        const { content } = req.body;
        if (!content) {
            return res.status(400).json({ message: "Le champ 'content' est requis." });
        }

        const newJoke = await Joke.create({ content });
        res.status(201).json(newJoke);
    } catch (error) {
        res.status(500).json({ message: "Erreur lors de l'ajout de la blague." });
    }
};

