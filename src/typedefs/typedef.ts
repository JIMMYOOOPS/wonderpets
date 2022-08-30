import { gql } from 'apollo-server-express';
import { User, LoginUser } from '../../src/User';

const typeDefs = gql`
  type User {
    id: ID
    account: String
    hashpassword: String
    userName: String
    birthday: DateTime
  }

  type UserInfo {
    account: String
    userName: String
    birthday: DateTime
  }

  type LoginUser {
    user: UserInfo
    accessToken: String
  }

  type Query {
    user(id: ID): User
    users: [User]
    me: UserInfo
  }

  type Token {
    token: String
  }

  type Mutation {
    login(account: String!, password: String!): LoginUser
  }

  scalar DateTime
`;

export { typeDefs };
