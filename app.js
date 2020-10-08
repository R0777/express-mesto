const express = require('express');
const path = require('path');
const cards = require('./routes/cards.js');
const users = require('./routes/users.js');

const { PORT = 3100} = process.env;
const app = express();

app.use('/', users);
app.use('/', cards);
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
  res.status(404).send({"message": "Запрашиваемый ресурс не найден"});
});



app.listen(PORT, () => {
  console.log(`ServON`)
});