let users = [];

const resetUsers = () => {
  users = [];
};

const getAll = () => {
  return users;
};

const getById = (id) => {
  return users.find((user) => user.id === +id) || null;
};

const create = (name) => {
  const newId = Math.max(0, ...users.map((user) => user.id)) + 1;
  const newUser = {
    id: newId,
    name,
  };

  users.push(newUser);

  return newUser;
};

const remove = (id) => {
  users = users.filter((user) => user.id !== +id);
};

const update = ({ id, name }) => {
  const foundUser = getById(id);

  Object.assign(foundUser, { name });

  return foundUser;
};

module.exports = {
  getAll,
  getById,
  create,
  remove,
  update,
  resetUsers,
};
