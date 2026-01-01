const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const { Score } = require('./models');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// Routes
app.get('/scores/:game', async (req, res) => {
    const game = req.params.game;
    const scores = await Score.findAll({ where: { game }, order: [['score', 'DESC']] });
    res.json(scores);
});

app.post('/scores', async (req, res) => {
    const { username, game, score } = req.body;
    const newScore = await Score.create({ username, game, score });
    res.json(newScore);
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
