const path = require('path');
const readCards = require('../utils/read-file');

const jsonCardsPath = path.join(__dirname, '..', 'data', 'cards.json');

const getCards = (req, res) => {
  readCards(jsonCardsPath)
    .then((data) => res.send(data))
    .catch(() => {
      res.status(500).send({ message: 'На сервере произошла ошибка' });
    });
};

module.exports = { getCards };
