import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcrypt';

import { users } from './importusers';
import { User } from '../src/User';

dotenv.config({ path: './.env' });

let BCRYPT_SALT: number;
if (process.env.BCRYPT_SALT) {
  BCRYPT_SALT = parseInt(process.env.BCRYPT_SALT);
} else {
  throw new Error('env is missing value');
}

let TOKEN_SECRET: string;
if (process.env.TOKEN_SECRET) {
  TOKEN_SECRET = process.env.TOKEN_SECRET;
} else {
  throw new Error('env is missing value');
}

let TOKEN_EXPIRE: number;
if (process.env.TOKEN_EXPIRE) {
  TOKEN_EXPIRE = parseInt(process.env.TOKEN_EXPIRE);
} else {
  throw new Error('env is missing value');
}

async function getUser(token: string) {
  const accessToken = token.replace(/Bearer/g, '');
  if (accessToken === '') {
    throw new Error('Please login before entering me endpoint.');
  }
  const user = await new Promise((resolve, reject) => {
    jwt.verify(accessToken, TOKEN_SECRET, (err, user) => {
      if (err) {
        reject(err);
      }
      resolve(user);
    });
  });
  return user;
}

function checkId(users: User[], id: number) {
  const result = validate(users);
  function validate(users: User[]) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].id === id) {
        return users[i];
      }
    }
    return undefined;
  }
  if (typeof result == undefined) {
    throw new Error('the id does not exist.');
  }
  return result;
}

function checkAccount(users: User[], account: string) {
  const result = validate(users);
  function validate(users: User[]) {
    for (let i = 0; i < users.length; i++) {
      if (users[i].account === account) {
        return i;
      }
    }
    return undefined;
  }
  if (typeof result !== 'number') {
    throw new Error('the account does not exist.');
  }
  return result;
}

async function checkPassword(data: number, password: string) {
  const passwordCompare = await bcrypt.compare(
    password,
    users[data].hashPassword
  );
  if (!passwordCompare) {
    throw new Error('the password is incorrect.');
  }
}

export {
  getUser,
  checkId,
  checkAccount,
  checkPassword,
  BCRYPT_SALT,
  TOKEN_SECRET,
  TOKEN_EXPIRE,
};
