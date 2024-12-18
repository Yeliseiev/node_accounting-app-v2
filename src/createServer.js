'use strict';

const express = require('express');
const cors = require('cors');
const userRouter = require('./routers/user.route.js');
const { resetUsers } = require('./services/user.service.js');

function createServer() {
  resetUsers();

  const app = express();

  app.use(cors());
  app.use('/users', userRouter);

  return app;
}

module.exports = {
  createServer,
};
