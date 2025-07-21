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
};