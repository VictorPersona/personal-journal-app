const express = require('express')
const{getJournals,createJournal,deleteJournal,updateJournal} = require('../controllers/journalControllers')

const journalRouter = express.Router()

journalRouter.get('/',getJournals)
journalRouter.post('/',createJournal)
journalRouter.delete('/:id', deleteJournal)
journalRouter.put('/:id',updateJournal)

module.exports = journalRouter
