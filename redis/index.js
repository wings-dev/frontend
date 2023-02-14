const express = require('express')
const Redis = require('redis')
const bodyParser = require('body-parser')

const app = express()
const jsonParser = bodyParser.json()

const redisClient = Redis.createClient({url: "redis://default:b0c7d82af2ea4796a441b9ee7e91a74f@eu2-definite-liger-31710.upstash.io:31710"})

redisClient.on('error', (err) => {
  console.error(err)
})

app.use(jsonParser)

app.post('/', (req, res) => {
  const key = req.body.key

  if (!key) {
    return res.status(400).send('key parameter missing')
  }

  redisClient.connect()
    .then(() => redisClient.get(key))
    .then(val => res.send(val))
    .finally(() => redisClient.disconnect());

})

export default {
  path: '/redis',
  handler: app
}
