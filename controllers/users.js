const User = require('../models/user');

const getUsers = async (req, res) => {
  try {
    const users = await User.find({});
    res.status(200).send(users);
  } catch (error) {
    res.status(500).send({ message: 'На сервере произошла ошибка запроса' });
  }
};

const getUser = async (req, res) => {
  try {
    const { id } = await req.params;
    const user = await User.findOne({ _id: id });
    res.status(200).send(user);
  } catch (error) {
    res.status(404).send({ message: 'Нет пользователя с таким id' });
  }
};

const createUser = async (req, res) => {
  try {
    const newUser = await User.create({ ...req.body });
    res.status(200).send(newUser);
  } catch (error) {
    res.status(400).send({ message: 'На сервер переданы некорректные данные' });
  }
};

module.exports = { getUser, getUsers, createUser };
