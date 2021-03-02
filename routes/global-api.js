const { Router } = require('express');

const router = Router();

router.get('/', (req, res) => {
  res.send(JSON.stringify({
    id: 123,
    code: 200
  }));
});

module.exports = router;