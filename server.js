const express = require('express');
const mongoose = require('mongoose');
const db = require('./config/mongoose')
const routes = require('./routes/api');
const Test = require('./models/Test')

const app = express();

app.use('/api', require('./routes/api'));

const PORT = process.env.PORT || 3000;

app.use(express.json());
async function saveTest(req, res) {
  const { name, email } = req.body

  const test = new Test({
    name,
    email
  })

  const result = await test.save();
  res.send(result);
}

app.post('/test', (req, res) => {
  saveTest(req, res);
})

app.listen(PORT, () => {
  console.log(`App is listening on ${PORT}`)
})
