const express = require('express');
const router = express.Router();
// !const { succes, error } = require('../../Network/response');

router.get('/', (request, response) => {
  response.send('GET /types');
});

module.exports = router;
