const express = require('express')
const authMiddleware = require('../middleware/authMiddleware')
const{getJournals,getJournal,createJournal,deleteJournal,updateJournal} = require('../controllers/journalControllers')

const journalRouter = express.Router()

journalRouter.get('/',authMiddleware,getJournals)
journalRouter.get('/:id', authMiddleware,getJournal)
journalRouter.post('/', authMiddleware,createJournal)
journalRouter.delete('/:id',authMiddleware, deleteJournal)
journalRouter.put('/:id', authMiddleware,updateJournal)

module.exports = journalRouter
