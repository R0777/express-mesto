const router = require('express').Router();
const users = require('../data/users.json');

router.get('/users', (req, res) => {
  res.send(users);
});

router.get('/users/:id', (req, res) => {

const {id} = req.params;

if (!users.find((user) => user._id === id)) {
  res.status(404).send({"message": "Нет пользователя с таким id - "+id});
       return;
   }
    res.send(users.find((user) => user._id === id));
});

module.exports = router;