const expenseService = require('../services/expense.service.js');
const userService = require('../services/user.service.js');

const get = (req, res) => {
  const { userId, categories, from, to } = req.query;

  const filteredExpenses = expenseService.getAll({
    userId,
    categories,
    from,
    to,
  });

  res.send(filteredExpenses);
};

const getOne = (req, res) => {
  const { id } = req.params;

  if (isNaN(+id)) {
    return res.status(400).send({ error: 'Invalid request params.' });
  }

  const foundExpense = expenseService.getById(id);

  if (!foundExpense) {
    return res.status(404).send({ error: 'Expense not found.' });
  }

  res.send(foundExpense);
};

const add = (req, res) => {
  const data = req.body;

  const foundUser = userService.getById(data.userId);

  if (!foundUser) {
    return res.status(400).send({ error: 'Invalid request params.' });
  }

  const newExpense = expenseService.create(data);

  res.status(201).send(newExpense);
};

const remove = (req, res) => {
  const { id } = req.params;

  if (isNaN(+id)) {
    return res.status(400).send({ error: 'Invalid request params.' });
  }

  const foundExpense = expenseService.getById(id);

  if (!foundExpense) {
    return res.status(404).send({ error: 'Expense not found.' });
  }

  expenseService.remove(id);

  res.sendStatus(204);
};

const update = (req, res) => {
  const { id } = req.params;

  if (isNaN(+id)) {
    return res.status(400).send({ error: 'Invalid request params' });
  }

  const foundExpense = expenseService.getById(id);

  if (!foundExpense) {
    return res.status(404).send({ error: 'Expense not found.' });
  }

  const data = req.body;

  expenseService.update(id, data);

  res.send(foundExpense);
};

module.exports = {
  get,
  getOne,
  add,
  remove,
  update,
};
