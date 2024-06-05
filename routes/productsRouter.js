const express = require('express')
const { faker } = require('@faker-js/faker')

const router = express.Router();

router.get('/', (req, res) => {
  const productos = [];
  const { limit } = req.query;
  const size = limit || 10;
  for (let i=0; i<size; i++) {
    productos.push({
      name: faker.commerce.productName(),
      price: parseInt(faker.commerce.price()),
      image: faker.image.imageUrl()
    })
  }
  res.json(productos)
})
router.get('/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Producto 1',
    precio: 25
  })
})

module.exports = router;
