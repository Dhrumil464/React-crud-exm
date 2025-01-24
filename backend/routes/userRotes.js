const express = require('express');
const { createUser, getAll, getOne, updateUser, deleteUser } = require('../controller/userController');

const router = express.Router();

router.post('/create', createUser);
router.get('/getAll', getAll);
router.get('/getOne/:id', getOne);
router.put('/updateUser/:id', updateUser);
router.delete('/deleteUser/:id', deleteUser);

module.exports = router;