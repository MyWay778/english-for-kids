import app from './server';
import {MongoClient} from 'mongodb';
import AuthorizationDAO from './dao/authorization.dao';

export const port = process.env.PORT || 5000;
const urls = {
  heroku: 'https://myway778-english-for-kids.herokuapp.com',
  local: 'http://localhost:5000',
  mongo: 'mongodb+srv://admin:9FqNs03syBCp6Lpu@cluster0.foknh.mongodb.net/english-for-kids?retryWrites=true&w=majority',
}
export const baseURL = urls.local;

app.listen(port, () => {
  console.log(`Listening on the port ${port}`);
  MongoClient.connect(urls.mongo).catch(e => {
    console.log(e.stack);
    process.exit(1)
  }).then(async conn => {
    await AuthorizationDAO.injectDB(conn);
    console.log('Connected to DB');
  });
});
