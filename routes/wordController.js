const express = require('express')
const Word = require('../db/models/Word')
const router = express.Router()

router.get('/', async(request, response) => {
  try {
    const words = await Word.find({})
    response.json(words)
  } catch (err) {
    console.log(err)
    response.sendStatus(500)
  }
})

router.post('/', async(request, response) => {
  try {
    const newWord = await Word.create(request.body)
    response.json(newWord)
  } catch (err) {
    console.log(err)
    response.sendStatus(500)
  }
})

router.delete('/:wordId', async(request, response) => {
  try {
    await Word.findByIdAndRemove(request.params.wordId)
    response.sendStatus(200)
  } catch (err) {
    console.log(err)
    response.sendStatus(500)
  }
})

router.patch('/:wordId', async(request, response) => {
  try {
    const updatedIdea = await Word.findByIdAndUpdate(request.params.wordId, request.body, {new: true})
    response.json(updatedIdea)
  } catch (err) {
    console.log(err)
    response.sendStatus(500)
  }
})

module.exports = router