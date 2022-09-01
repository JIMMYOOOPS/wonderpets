import { faker } from '@faker-js/faker';
import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import { BCRYPT_SALT, TOKEN_SECRET, TOKEN_EXPIRE } from '../util/util';

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

export { User, TOKEN_SECRET, TOKEN_EXPIRE };
