const express = require('express');
const { fetchUserById, updateUser } = require('../controller/user');

const router = express.Router();

//   /user is already added in the base path
router.get('/:id', fetchUserById)
      .patch('/:id', updateUser)
      


exports.router =  router;