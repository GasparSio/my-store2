const express = require('express')
const app = express();
const routerApi = require('./routes');

const port = 3000;

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});


app.get('', (req, res) => {
  res.send('Hello world!')
});

routerApi(app);


