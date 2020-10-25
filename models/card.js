const mongoose = require('mongoose');

const cardSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
    minlength: 2,
    maxlength: 30,
  },
  link: {
    type: String,
    required: true,
    validate: {
      validator(v) {
        const regex = /^https?:\/\/(www\.)?(([\w#!:.?+=&%@!\-/])*)?\.(([\w#!:.?+=&%@!\-/])*)?#?/gi;
        const str = v;
        return regex.test(str);
      },
      message: 'Укажите ссылку на изображенин',
    },
  },
  owner: mongoose.Schema.Types.ObjectId,

  likes: [{
    type: mongoose.Schema.Types.ObjectId,
    default: {
      type: Array,
    },
  }],
  createdAt: {
    type: Date,
    default: Date.now,
  },
},
{
  versionKey: false,
});

module.exports = mongoose.model('card', cardSchema);