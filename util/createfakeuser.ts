import { User } from '../src/User';
import fs from 'fs';
const createUserNum = 5;

const userArray: User[] = [];

function createUser(createUserNum: number) {
  for (let i = 0; i < createUserNum; i++) {
    let user = new User();
    user.id = i + 1;
    userArray.push(user);
  }
}

createUser(createUserNum);

let userArrayDB: User[] = JSON.parse(JSON.stringify(userArray));
for (let i = 0; i < userArrayDB.length; i++) {
  delete userArrayDB[i].password;
}
function createJSONFile(userArray: User[], userArrayDB: User[]) {
  fs.writeFile('user.json', JSON.stringify(userArray), function (error) {
    if (error) throw error;
    console.log('complete');
  });

  fs.writeFile(
    'userdatabase.json',
    JSON.stringify(userArrayDB),
    function (error) {
      if (error) throw error;
      console.log('complete');
    }
  );
}

createJSONFile(userArray, userArrayDB);
