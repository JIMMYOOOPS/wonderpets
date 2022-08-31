import { users } from '../../util/importusers';
import { User } from '../../src/User';
import { Request } from 'express-serve-static-core';
import {
  TOKEN_SECRET,
  TOKEN_EXPIRE,
  checkId,
  checkAccount,
  checkPassword,
  getUser,
} from '../../util/util';
import { DateTimeResolver } from 'graphql-scalars';

import jwt from 'jsonwebtoken';
const resolvers = {
  Query: {
    user: (parent: null, { id }: { id: number }) => {
      let data: User | undefined;
      data = checkId(users, id);
      return data;
    },
    users: () => users,
    //Token is decrypted at context and user information is recieved
    me: async (parent: null, args: null, req: Request) => {
      const token = req.headers.authorization || '';
      const user = await getUser(token);
      return user;
    },
  },
  Mutation: {
    login: async (
      parent: null,
      { account, password }: { account: string; password: string }
    ) => {
      let data: number | undefined;
      data = checkAccount(users, account);
      checkPassword(data, password);

      const accessToken = jwt.sign(
        {
          id: users[data].id,
          account: users[data].account,
          userName: users[data].userName,
          birthday: users[data].birthday,
        },
        TOKEN_SECRET,
        { expiresIn: TOKEN_EXPIRE }
      );
      const result = {
        user: {
          id: users[data].id,
          account: users[data].account,
          userName: users[data].userName,
          birthday: users[data].birthday,
        },
        accessToken: accessToken,
      };
      return result;
    },
  },

  DateTime: DateTimeResolver,
};

export { resolvers };
