const fsPromis = require('fs').promises;

module.exports = (pathUrl) => fsPromis.readFile(pathUrl, { encoding: 'utf8' })
  .then((file) => JSON.parse(file));
