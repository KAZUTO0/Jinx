import express from 'express';

const app = express();

app.get('/', (req, res) => {
    res.send('Hello World!');
  });

export function online() {
    app.listen(3000, () =>
  console.log('bot listening on port 3000!'),
);
}