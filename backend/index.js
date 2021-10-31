const express = require('express');
const cors = require('cors');
const { ApolloServer } = require('apollo-server-express');
const gamesTypeDefs = require('./schema');
const gamesResolvers = require('./resolvers');

async function startApolloServer(typeDefs, resolvers) {
  // Initialize the app
  const app = express();

  app.use(cors());

  const path = '/graphql';

  const GraphQLPlayground = {
    env: process.env.NODE_ENV,
    endpoint: '/graphql',
    settings: {
      'editor.theme': 'dark',
    },
  };

  // GraphQL: Schema
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    playground: process.env.NODE_ENV !== 'production' && GraphQLPlayground,
  });

  await server.start();
  server.applyMiddleware({ app, path });

  // Start the server
  app.listen(3330, () => {
    console.log('Go to http://localhost:3330/graphql to run queries!');
  });
}

startApolloServer(gamesTypeDefs, gamesResolvers);
