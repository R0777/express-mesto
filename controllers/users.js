const path = require('path');
const readUsers = require('../utils/read-file');

const jsonUsersPath = path.join(__dirname, '..', 'data', 'users.json');

const getUsers = (req, res) => {
  readUsers(jsonUsersPath)
    .then((data) => res.send(data))
    .catch((err) => {
      res.send({ message: `Ошибка чтения данных - ${err}` });
    });
};

const getUser = (req, res) => {
  const { id } = req.params;
  readUsers(jsonUsersPath)
    .then((data) => {
      const userToFind = data.find((user) => user._id === id);
      return userToFind;
    })
    .then((user) => {
      if (!user) {
        return res.status(404).send({ message: `Нет пользователя с таким id - ${id}` });
      } return res.send(user);
    })
    .catch((err) => {
      res.send({ message: `Ошибка чтения данных - ${err}` });
    });
};

module.exports = { getUser, getUsers };