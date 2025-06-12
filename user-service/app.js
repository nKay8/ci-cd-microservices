const express = require('express');
const app = express();
const port = 3000;

app.get('/user', (req, res) => {
  res.json({ message: 'User Service is working!' });
});

app.get('/users', (req, res) => {
  res.json({ users: ['Alice', 'Bob'] });
});

app.listen(port, () => {
  console.log(`User Service running on port ${port}`);
});
