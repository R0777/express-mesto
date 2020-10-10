const path = require('path');
const readCards = require('../utils/read-file');

const jsonCardsPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  readCards(jsonCardsPath)
    .then((data) => res.send(data))
    .catch((err) => {
      res.send({ message: `Ошибка чтения данных - ${err}` });
    });
};

module.exports = { getCards };