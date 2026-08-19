const express = require('express');
const app = express();
const PORT = 8081;

app.get('/health', (req, res) => {
  res.json({ status: 'ok', service: 'orders-service' });
});

app.get('/orders', (req, res) => {
  res.json([
    { id: 101, item: 'Wireless Mouse', status: 'shipped' },
    { id: 102, item: 'Mechanical Keyboard', status: 'processing' },
    { id: 103, item: 'USB-C Hub', status: 'delivered' }
  ]);
});

app.listen(PORT, () => {
  console.log(`orders-service listening on port ${PORT}`);
});
