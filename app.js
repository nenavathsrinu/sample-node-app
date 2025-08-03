const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Hello from private EC2 behind NLB!');
});

app.listen(port, '0.0.0.0', () => {
  console.log(`App running on port ${port}`);
});
