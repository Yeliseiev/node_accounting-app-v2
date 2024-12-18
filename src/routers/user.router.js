const express = require('express');

const router = express.Router();

const users = [{ id: 1, name: 'John' }];

router.get('/', (req, res) => {
  res.setHeader('Content-type', 'application/json');
  res.send(users);
});

router.get('/:id', (req, res) => {
  const { id } = req.params;

  if (isNaN(+id)) {
    return res.status(400).send({ error: 'Invalid request params' });
  }

  const foundUser = users.find((user) => user.id === +id) || null;

  if (!foundUser) {
    return res.status(404).send({ error: 'User not found' });
  }

  res.send(foundUser);
});

router.post('/', express.json(), (req, res) => {
  const { name } = req.body;

  if (typeof name !== 'string' || !name.trim()) {
    return res.status(400).send({ error: 'Invalid request params' });
  }

  const newId = Math.max(0, ...users.map((user) => user.id)) + 1;
  const newUser = {
    id: newId,
    name,
  };

  res.status(201).send(newUser);
});

module.exports = router;
