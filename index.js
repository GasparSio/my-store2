const express = require('express')

const app = express();

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get('/home', (req, res) => {
  res.send('Hello world!')
});

app.get('/contactos', (req, res) => {
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
app.get('/contactos/:id', (req, res) => {
  const { id } = req.params;
  res.json({
    id,
    name: 'Juan',
    age: 25,
    email: ''
  })
})
app.get('/contactos/:id/sexo/:idsex', (req, res) => {
  const { id, idsex } = req.params;
  res.json({
    id,
    idsex,
    age:25,
    email: ''
  })
})
