const GameController = require('../controllers/Game');

const GameResolver = {
  Query: {
    games: GameController.getGames,
  },
};

module.exports = GameResolver;
