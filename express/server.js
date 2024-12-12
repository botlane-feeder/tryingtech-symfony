// server/server.js
const express = require('express');
const app = express();
const port = 80;

app.get('/api/roll-dice', (req, res) => {
  const number = Math.floor(Math.random() * 12) + 1;
  res.json({ number });
});

app.get('/api/calculate-primes', (req, res) => {
  const limit = parseInt(req.query.limit, 10);
  const primes = [];
  for (let num = 2; num <= limit; num++) {
    let isPrime = true;
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) {
        isPrime = false;
        break;
      }
    }
    if (isPrime) {
      primes.push(num);
    }
  }
  res.json({ primes });
});

app.listen(port, () => {
  console.log(`Server running at http://localhost:${port}`);
});