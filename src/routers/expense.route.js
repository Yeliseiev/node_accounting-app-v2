const express = require('express');
const userService = require('../services/user.service.js');
const { getNewId } = require('../utils/getNewId.js');

const router = express.Router();
let expenses = [];

const resetExpenses = () => {
  expenses = [];
};

router.get('/', (req, res) => {
  const { userId, categories, from, to } = req.query;

  const filteredExpenses = expenses.filter((exp) => {
    if (userId && exp.userId !== +userId) {
      return false;
    }

    if (categories && !categories.includes(exp.category)) {
      return false;
    }

    if (from && new Date(exp.spentAt) < new Date(from)) {
      return false;
    }

    if (to && new Date(exp.spentAt) > new Date(to)) {
      return false;
    }

    return true;
  });

  res.send(filteredExpenses);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  if (isNaN(+id)) {
    return res.status(400).send({ error: 'Invalid request params.' });
  }

  const foundExpense = expenses.find((exp) => exp.id === +id) || null;

  if (!foundExpense) {
    return res.status(404).send({ error: 'Expense not found.' });
  }

  res.send(foundExpense);
});

router.post('/', express.json(), (req, res) => {
  const data = req.body;

  const foundUser = userService.getById(data.userId);

  if (!foundUser) {
    return res.status(400).send({ error: 'Invalid request params.' });
  }

  const newExpense = {
    id: getNewId(expenses),
    ...data,
  };

  expenses.push(newExpense);

  res.status(201).send(newExpense);
});

module.exports = {
  router,
  resetExpenses,
};
