'use strict';

const express = require('express');
const cors = require('cors');
const usersRouter = require('./routers/user.route.js');
const {
  router: expensesRouter,
  resetExpenses,
} = require('./routers/expense.route.js');
const { resetUsers } = require('./services/user.service.js');

function createServer() {
  resetUsers();
  resetExpenses();

  const app = express();

  app.use(cors());
  app.use('/users', usersRouter);
  app.use('/expenses', expensesRouter);

  return app;
}

module.exports = {
  createServer,
};
