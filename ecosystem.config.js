module.exports = {
  apps: [{
    name: 'nuxt', script: './start.js',
    env: {
      HOST: 'localhost', PORT: process.env.PORT
    }
  }]
};
