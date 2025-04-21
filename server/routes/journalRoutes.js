const express = require('express')
const{getJournals,getJournal,createJournal,deleteJournal,updateJournal} = require('../controllers/journalControllers')

const journalRouter = express.Router()

journalRouter.get('/',getJournals)
journalRouter.get('/:id',getJournal)
journalRouter.post('/',createJournal)
journalRouter.delete('/:id', deleteJournal)
journalRouter.put('/:id',updateJournal)

module.exports = journalRouter
