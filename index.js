const express = require('express');
const app = express();

// This handles the main page request
app.get('/', (req, res) => {
  const name = process.env.NAME || 'Cloud Run Developer';
  res.send(`<h1>Hello ${name}!</h1><p>Your CI/CD pipeline is working!</p>`);
});

// CRITICAL: Cloud Run tells your app which port to listen on via an Environment Variable
// If you hardcode this to 3000, the deployment will fail.
const port = parseInt(process.env.PORT) || 8080;

app.listen(port, () => {
  console.log(`Server is running and listening on port ${port}`);
});
