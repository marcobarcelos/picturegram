const config = process.env.NODE_ENV === 'production' ?
  require('./config.prod') :
  require('./config.dev');

module.exports = config;
