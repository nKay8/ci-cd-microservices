const express = require('express');
const app = express();
const PORT = process.env.PORT || 3002;

app.get('/orders', (req, res) => {
  res.json({ message: 'Order service is working!' });
});

app.get('/payments', (req, res) => {
  res.json({ payments: ['Order#123', 'Order#456'] });
});


app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
