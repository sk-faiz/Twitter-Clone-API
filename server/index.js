const express = require('express');
const app = express();
const port = 5000;
const Twitter = require('../server/twitter');
const twitter = new Twitter();
require('dotenv').config();

app.use((req, res, next) => {
  res.setHeader('Access-Control-Allow-Origin', '*');
  next();
})

app.get('/tweets', (req, res) => {
    const query = req.query.q;
    const count = req.query.count;
    const maxid = req.query.max_id;
    twitter.get(query, count, maxid).then((response) => {
      res.status(200).send(response.data);
    })
})

app.listen(port, (req, res) => {
  console.log(`Example app listening at http://localhost:${port}`)
})