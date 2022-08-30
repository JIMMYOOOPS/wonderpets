import jwt from 'jsonwebtoken';
import { TOKEN_SECRET } from './../src/User';

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

export { getUser };
