const mongoose = require('mongoose');

const userSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  about: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  avatar: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        const regex = /^http?:\/\/\s/gi;
        const str = v;
        return regex.test(str);
      },
      message: 'Укажите ссылку на изображенин',
    },
  },
});

module.exports = mongoose.model('user', userSchema);
