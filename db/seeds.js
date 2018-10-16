require('dotenv').config()

const mongoose = require('mongoose')
mongoose.connect(process.env.MONGODB_URI, {useNewUrlParser: true})

const Word = require('./models/Word.js')

const who = new Word({word: 'who'})
const what = new Word({word: 'what'})
const where = new Word({word: 'where'})
const when = new Word({word: 'when'})
const why = new Word({word: 'why'})
const how = new Word({word: 'how'})

Word
  .deleteMany({})
  .then(() => who.save())
  .then(() => what.save())
  .then(() => when.save())
  .then(() => where.save())
  .then(() => why.save())
  .then(() => how.save())
  .then(() => console.log('Successful Save!!!'))
  .then(() => mongoose.connection.close())