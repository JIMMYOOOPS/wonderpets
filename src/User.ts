import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

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

class User {
  id: number;
  account: string;
  password: string | undefined;
  hashPassword: string;
  userName: string;
  birthday: Date;
  token: string | undefined;

  constructor() {
    this.id = 0;
    this.account = faker.name.fullName().replace(/ /g, '');
    this.password = faker.animal.cat().replace(/ /g, '');
    this.hashPassword = bcrypt.hashSync(this.password, BCRYPT_SALT);
    this.userName = faker.name.firstName();
    this.birthday = faker.date.birthdate();
    this.token = jwt.sign(
      {
        account: this.account,
        hashPassword: this.hashPassword,
        userName: this.userName,
        birthday: this.birthday,
      },
      TOKEN_SECRET
    );
  }
}

class LoginUser {
  user: {
    account: string;
    userName: string;
    birthday: Date;
  };
  accessToken: string;
  constructor() {
    this.user = {
      account: '',
      userName: '',
      birthday: new Date(),
    };
    this.accessToken = '';
  }
}

export { User, LoginUser, TOKEN_SECRET, TOKEN_EXPIRE };
