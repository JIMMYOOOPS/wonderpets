import { users } from '../../util/importusers';
import { User, LoginUser, TOKEN_SECRET, TOKEN_EXPIRE } from '../../src/User';
import { DateTimeResolver } from 'graphql-scalars';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
const resolvers = {
  Query: {
    users: () => users,
  },
  Mutation: {
    // me: () => {},
    login: async (
      parent: string,
      { account, password }: { account: string; password: string },
      req: string
    ) => {
      let data: number | undefined;
      function checkAccount(users: User[]) {
        const result = validate(users);
        function validate(users: User[]) {
          for (let i = 0; i < users.length; i++) {
            if (users[i].account === account) {
              return i;
            } else {
              return undefined;
            }
          }
        }
        if (typeof result !== 'number') {
          throw new Error('the account does not exist.');
        }
        return result;
      }

      data = checkAccount(users);

      async function checkPassword(data: number) {
        const passwordCompare = await bcrypt.compare(
          password,
          users[data].hashPassword
        );
        if (!passwordCompare) {
          throw new Error('the password is incorrect.');
        }
      }

      checkPassword(data);

      const accessToken = jwt.sign(
        {
          account: users[data].account,
          userName: users[data].userName,
          birthday: users[data].birthday,
        },
        TOKEN_SECRET,
        { expiresIn: TOKEN_EXPIRE }
      );
      const result = {
        user: {
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
