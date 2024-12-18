const { getNewId } = require('../utils/getNewId.js');

let expenses = [];

const resetExpenses = () => {
  expenses = [];
};

const getAll = ({ userId, categories, from, to }) => {
  return expenses.filter((exp) => {
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
};

const getById = (id) => {
  return expenses.find((exp) => exp.id === +id) || null;
};

const create = (data) => {
  const newExpense = {
    id: getNewId(expenses),
    ...data,
  };

  expenses.push(newExpense);

  return newExpense;
};

const remove = (id) => {
  expenses = expenses.filter((exp) => exp.id !== +id);
};

const update = (id, data) => {
  const foundExpense = getById(id);

  Object.assign(foundExpense, data);
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
  resetExpenses,
};
