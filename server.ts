import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { resolvers } from './src/resolvers/resolver';
import { typeDefs } from './src/typedefs/typedef';

const app = express();
const PORT = 3000;

async function startApolloServer() {
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [ApolloServerPluginLandingPageLocalDefault({ embed: true })],
  });

  await server.start();
  server.applyMiddleware({ app });
  app.listen(PORT, () =>
    console.log(
      `🚀 ApolloServer running on end point ${PORT}${server.graphqlPath}`
    )
  );
}

startApolloServer();
