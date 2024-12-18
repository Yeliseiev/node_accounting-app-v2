'use strict';

const express = require('express');
const cors = require('cors');
const { router: userRouter, resetUsers } = require('./routers/user.router.js');

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
