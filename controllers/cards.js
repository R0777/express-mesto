const Card = require('../models/card');

const getCards = async (req, res) => {
  try {
    const cards = await Card.find({});
    res.status(200).send(cards);
  } catch (error) {
    res.status(500).send({ message: 'На сервере произошла ошибка запроса' });
  }
};

const deleteCard = async (req, res) => {
  try {
    const { id } = await req.params;
    await Card.findOneAndRemove({ _id: id });
    res.status(200).send({ message: 'Карточка удалена' });
  } catch (error) {
    res.status(404).send({ message: 'Искомая карточка не найдена' });
  }
};

const createCard = async (req, res) => {
  try {
    const newCard = await Card.create({ ...req.body });
    res.status(200).send(newCard);
  } catch (error) {
    res.status(400).send({ message: 'На сервер переданы некорректные данные' });
  }
};

module.exports = { getCards, createCard, deleteCard };
