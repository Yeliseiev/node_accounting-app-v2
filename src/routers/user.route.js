const express = require('express');
const userController = require('../controllers/user.controller.js');

const router = express.Router();

router.get('/', userController.get);
router.get('/:id', userController.getOne);
router.post('/', express.json(), userController.add);
router.delete('/:id', userController.remove);
router.patch('/:id', express.json(), userController.update);

module.exports = router;
