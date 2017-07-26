const express = require('express');
const app = express();

// Route handler
app.get('/', (req, res) => {
  res.send({ hi: 'there' });
});

//sever on localhost:5000
// production use process.env.port || is for dev
const PORT = process.env.PORT || 5000;
app.listen(PORT);
