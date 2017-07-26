const express = require('express');
require('./services/passport');

const app = express();

require('./routes/authRoutes')(app);

//sever on localhost:5000
// production use process.env.port || is for dev
const PORT = process.env.PORT || 5000;
app.listen(PORT);
