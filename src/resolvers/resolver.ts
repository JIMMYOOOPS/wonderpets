// import { users } from '../data/userinfo';
import { DateTimeResolver } from 'graphql-scalars';

const users = [
  {
    "id": "",
    "account": "123",
    "password": "123",
    "name": "",
    "birthday": ""
  }, 
  {
    "id": "",
    "account": "123",
    "password": "123",
    "name": "",
    "birthday": ""
  },
  {
    "id": "",
    "account": "123",
    "password": "123",
    "name": "",
    "birthday": ""
  }
]

const resolvers = {
  Query: {
    users: () => users,
  },
  // Mutation: {
  //   login: (parentValue, { email, password }, req) => {
  //     return AuthService.login({ email, password, req });
  //   },
  // },

  DateTime: DateTimeResolver,
};

export {resolvers} 