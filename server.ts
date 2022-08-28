import express from 'express';
import { ApolloServer } from 'apollo-server-express';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { resolvers } from './src/resolvers/resolver';
import { typeDefs } from './src/typedefs/typedef';

async function startApolloServer(){
  const server = new ApolloServer({
    typeDefs,
    resolvers,
    csrfPrevention: true,
    cache: 'bounded',
    plugins: [
      ApolloServerPluginLandingPageLocalDefault({ embed: true }),
    ],
  });
  const app = express();
  const port = 3000;

  await server.start();
  server.applyMiddleware({ app });
  app.listen( port , () =>
    console.log(`🚀 ApolloServer running on end point ${port}${server.graphqlPath}`)
  );
}

startApolloServer();