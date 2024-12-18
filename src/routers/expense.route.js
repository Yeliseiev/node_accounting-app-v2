const express = require('express');
const expenseController = require('../controllers/expense.controller.js');

const router = express.Router();

router.get('/', expenseController.get);
router.get('/:id', expenseController.getOne);
router.post('/', express.json(), expenseController.add);
router.delete('/:id', expenseController.remove);
router.patch('/:id', express.json(), expenseController.update);

module.exports = router;
