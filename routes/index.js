const express = require('express');
const productsRouter = require('./productsRouter');
const contactsRouter = require('./contactsRouter');
const usersRouter = require('./usersRouter');

function routerApi(app) {
  //version 1
  const routerV1 = express.Router();
  app.use('/api/v1', routerV1);
  routerV1.use('/products', productsRouter);
  routerV1.use('/contacts', contactsRouter);
  routerV1.use('/users', usersRouter);

  //version2
  const routerV2 = express.Router();
  app.use('/api/v2', routerV2);
  routerV2.use('/products', productsRouter);
  routerV2.use('/contacts', contactsRouter);
  routerV2.use('/users', usersRouter);
}

module.exports = routerApi;
