import app from './server';

export const port = process.env.PORT || 5000;
export const baseURL = `http://localhost:${port}`;


app.listen(port, () => {
  console.log(`Listening on the port ${port}`);
})
