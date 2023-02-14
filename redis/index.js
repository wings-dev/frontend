const express = require('express')
const Redis = require('redis')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()

const redisClient = Redis.createClient(6379, '127.0.0.1')

redisClient.connect();

redisClient.on('error', (err) => {
  console.error(err)
})

app.use(jsonParser)

app.post('/', (req, res) => {
  const key = req.body.key

  if (!key) {
    return res.status(400).send('key parameter missing')
  }

  redisClient.get(key).then(val => {
    res.send(val);
  })
})

export default {
  path: '/redis',
  handler: app
}
