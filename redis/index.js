/*const express = require('express')
const Redis = require('redis')
const cors = require('cors')
const bodyParser = require('body-parser')
const NodeCache = require('node-cache');

const app = express()
app.use(cors());
const jsonParser = bodyParser.json()
app.use(jsonParser)

const cacheSearchVillas = new NodeCache({ stdTTL: 300, checkperiod: 320 });

const redisConnectionParams = {url: "redis://default:b0c7d82af2ea4796a441b9ee7e91a74f@eu2-definite-liger-31710.upstash.io:31710"};

app.post('/', (req, res) => {
  const key = req.body.key

  if (!key) {
    return res.status(400).send('key parameter missing')
  }

  const redisClient = Redis.createClient(redisConnectionParams);

  redisClient.connect()
    .then(() => redisClient.get(key))
    .then(val => res.send(val))
    .finally(() => redisClient.disconnect());

})

app.post('/villa-search', (req, res) => {
  const redisClient = Redis.createClient(redisConnectionParams);

  const site_id = process.env.SITE;
  const keyword = req.body.keyword;

  const searchVillas = (villas, keyword) => {
    return villas.filter(villa =>
      villa.code.toLowerCase().includes(keyword.toLowerCase()) ||
      villa.names.some(name => name.toLowerCase().includes(keyword.toLowerCase()))
    ).slice(0, 20);
  };

  const handleSearchResults = (villas, keyword) => {
    const results = searchVillas(villas, keyword);
    res.json(results);
  };

  let villas = cacheSearchVillas.get('villas');
  if (villas) {
    handleSearchResults(villas, keyword);
  } else {
    redisClient.connect()
      .then(() => redisClient.get(`web:${site_id}:search`))
      .then(villas => {
        villas = JSON.parse(villas)
        cacheSearchVillas.set('villas', villas);
        handleSearchResults(villas, keyword);
      })
      .finally(() => redisClient.disconnect());
  }
});

export default {
  path: '/data',
  handler: app
}*/
