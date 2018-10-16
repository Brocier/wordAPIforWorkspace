const {Schema} = require('mongoose')

const WordSchema = new Schema({
  word: {
    type: String,
    required: true
  }
}, {timestamps: {}})

module.exports = {
  WordSchema
}