const express = require('express');
const app = express();

app.get('/', (req, res) => {
  // If "MY_NAME" is set in the UI, use it. Otherwise, use "Stranger".
  const name = process.env.MY_NAME || 'Stranger'; 
  res.send(`<h1>Hello ${name}!</h1>`);
});

const port = parseInt(process.env.PORT) || 8080;
app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
