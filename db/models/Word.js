const mongoose = require('mongoose')
const {WordSchema} = require('../schema')

const Word = mongoose.model('Word', WordSchema)

module.exports = Word