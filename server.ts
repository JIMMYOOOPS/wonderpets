import express from 'express';
import { ApolloServer, gql } from 'apollo-server-express';
import { ApolloServerPluginLandingPageLocalDefault } from 'apollo-server-core';
import { DateTimeResolver } from 'graphql-scalars';

const users = [
  {
    "id": "",
    "account": "",
    "password": "",
    "name": "",
    "birthday": ""
  }, 
  {
    "id": "",
    "account": "",
    "password": "",
    "name": "",
    "birthday": ""
  },
  {
    "id": "",
    "account": "",
    "password": "",
    "name": "",
    "birthday": ""
  }
]

async function startApolloServer(){
  const resolvers = {
    Query: {
      users: () => users,
    },
    DateTime: DateTimeResolver,
  };
  
  const typeDefs = gql `
  type User {
    id: ID
    account: String
    password: String
    userName: String
    birthday: DateTime
  }
  
  type Query {
    users: [User]
  }
  
  scalar DateTime
  `;

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
  
  app.listen({ port }, () =>
    console.log(`🚀 Server ready at http://localhost:${port}${server.graphqlPath}`)
  );
}

startApolloServer();