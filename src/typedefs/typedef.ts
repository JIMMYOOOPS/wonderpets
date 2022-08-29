import { gql } from 'apollo-server-express';

  const typeDefs = gql `
  type User {
    id: ID
    account: String
    password: String
    userName: String
    birthday: DateTime
  }
  
  type Query {
    user(id: ID): User
    users: [User]
  }
  
  type Token {
    token: String
  }

  type Mutation {
    login(account: String!, password: String!): User
  }

  scalar DateTime
  `;

  export { typeDefs }