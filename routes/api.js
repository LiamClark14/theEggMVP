const express = require('express');
const router = express.Router();

router.get('/startups', function (req, res) {
  res.send({ type: 'GET' });
});

router.post('/startups', function (req, res) {
  res.send({ type: 'POST' });
});

router.put('/startups/:id', function (req, res) {
  res.send({ type: 'PUT' });
});

router.delete('/startups/:id', function (req, res) {
  res.send({ type: 'GET' });
});

module.exports = router;
