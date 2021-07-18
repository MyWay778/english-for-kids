import app from './server';

export const port = process.env.PORT || 5000;
const urls = {
  heroku: 'https://myway778-english-for-kids.herokuapp.com',
  local: 'http://localhost:5000',
}
export const baseURL = urls.local;


app.listen(port, () => {
  console.log(`Listening on the port ${port}`);
})
