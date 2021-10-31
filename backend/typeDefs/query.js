const { gql } = require('apollo-server-express');

const Query = gql`
  type Query {
    games: [Game]
  }
`;

module.exports = Query;
