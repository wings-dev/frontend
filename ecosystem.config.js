require('dotenv').config();

module.exports = {
  apps: [{
    name: 'nuxt' + process.env.NODE_PORT,
    script: './start.js',
    env: {
      HOST: '0.0.0.0',
      NODE_PORT: process.env.NODE_PORT
    }
  }]
};
