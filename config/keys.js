if (process.env.NODE_ENV === 'production') {
  // in production session
  module.exports = require('./prod');
} else {
  // in development session
  module.exports = require('./dev');
}
