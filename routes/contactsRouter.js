const express = require('express');

const router = express.Router();

router.get('/', (req, res) => {
  res.json([
    {
      id: 1,
      name: 'Juan',
      age: 25,
      email: ''
    },
    {
      id: 2,
      name: 'Pedro',
      age: 30,
      email: ''
    }
  ]
)
});

router.get('/filter', (req, res) => {
  res.send('yo soy un filtro')
})
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Juan',
    age: 25,
    email: ''
  })
})

router.get('/:id/sexo/:idsex', (req, res) => {
  const { id, idsex } = req.params;
  res.json({
    id,
    idsex,
    age:25,
    email: ''
  })
})

module.exports = router;
