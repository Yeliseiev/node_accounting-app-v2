const userService = require('../services/user.service.js');

const get = (req, res) => {
  const users = userService.getAll();

  res.setHeader('Content-type', 'application/json');
  res.send(users);
};

const getOne = (req, res) => {
  const { id } = req.params;

  if (isNaN(+id)) {
    return res.status(400).send({ error: 'Invalid request params.' });
  }

  const foundUser = userService.getById(id);

  if (!foundUser) {
    return res.status(404).send({ error: 'User not found.' });
  }

  res.send(foundUser);
};

const add = (req, res) => {
  const { name } = req.body;

  if (typeof name !== 'string' || !name.trim()) {
    return res.status(400).send({ error: 'Invalid request params.' });
  }

  const newUser = userService.create(name);

  res.status(201).send(newUser);
};

const remove = (req, res) => {
  const { id } = req.params;

  if (isNaN(+id)) {
    return res.status(400).send({ error: 'Invalid request params.' });
  }

  const foundUser = userService.getById(id);

  if (!foundUser) {
    return res.status(404).send({ error: 'User not found.' });
  }

  userService.remove(id);
  res.send(204);
};

const update = (req, res) => {
  const { id } = req.params;
  const { name } = req.body;

  if (isNaN(+id) || typeof name !== 'string' || !name.trim()) {
    return res.status(400).send({ error: 'Invalid request params.' });
  }

  const foundUser = userService.getById(id);

  if (!foundUser) {
    return res.status(404).send({ error: 'User not found.' });
  }

  const updatedUser = userService.update({ id, name });

  res.send(updatedUser);
};

module.exports = {
  get,
  getOne,
  add,
  remove,
  update,
};
