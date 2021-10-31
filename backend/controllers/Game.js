const axios = require('axios');

class GameController {
  static async getGames(parent, args, context, info) {
    try {
      const response = await axios.get(
        'https://s3-ap-southeast-1.amazonaws.com/he-public-data/gamesarena274f2bf.json'
      );

      // remove first item { "api_rate_limit":50000 }
      response.data.shift();
      const games = response.data;

      return games;
    } catch (error) {
      console.log(error);
    }
  }
}

module.exports = GameController;
