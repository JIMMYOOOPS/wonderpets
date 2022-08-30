import { User } from '../src/User';
import fs from 'fs';

let users: User[];
let data = fs.readFileSync('./util/userdatabase.json');
users = JSON.parse(data.toString());

export { users };
