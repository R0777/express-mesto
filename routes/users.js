const router = require('express').Router();
const users = require('../data/users.json');

router.get('/users', (req, res) => {
  res.send(users);
});


router.get('/users/:id', (req, res) => {

 const id = req.query._id


 //if (users.find(user => {user._id === req.query.id})) {
  //res.status(404).send({ "message": "Нет пользователя с таким id" });
       // return;
   // }
    res.send(`Id - ${id}`);
});

module.exports = router;