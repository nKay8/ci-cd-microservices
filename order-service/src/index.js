const express = require('express');
const axios = require('axios'); // for making HTTP requests
const app = express();
const PORT = process.env.PORT || 4000;

app.get('/orders', async (req, res) => {
  try {
    const userRes = await axios.get('http://user-service/users');
    const paymentRes = await axios.get('http://payment-service/payments');

    res.json({
      message: 'Order service is working!',
      userService: userRes.data,
      paymentService: paymentRes.data,
    });
  } catch (error) {
    res.status(500).json({ error: 'Failed to fetch from services', details: error.message });
  }
});

app.listen(PORT, () => {
  console.log(`Order Service running on port ${PORT}`);
});
