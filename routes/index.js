const productsRouter = require('./productsRouter');
const contactsRouter = require('./contactsRouter');
const usersRouter = require('./usersRouter');

function routerApi(app) {
  app.use('/products', productsRouter);
  app.use('/contacts', contactsRouter);
  app.use('/users', usersRouter);
}

module.exports = routerApi;
