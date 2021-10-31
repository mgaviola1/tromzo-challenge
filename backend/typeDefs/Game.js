const { gql } = require('apollo-server-express');

const GameType = gql`
  type Game {
    title: String
    platform: String
    score: Float
    genre: String
    editors_choice: String
  }
`;

module.exports = GameType;
