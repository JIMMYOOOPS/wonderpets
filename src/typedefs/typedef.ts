import { gql } from 'apollo-server-express';

const typeDefs = gql`
  type User {
    id: Int
    account: String
    hashPassword: String
    userName: String
    birthday: DateTime
  }

  type UserInfo {
    id: Int
    account: String
    userName: String
    birthday: DateTime
  }

  type UserLogin {
    user: UserInfo
    accessToken: String
  }

  type Query {
    user(id: Int): UserInfo
    users: [User]
    me: UserInfo
  }

  type Mutation {
    login(account: String!, password: String!): UserLogin
  }

  scalar DateTime
`;

export { typeDefs };
