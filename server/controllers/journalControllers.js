const journalModel = require('../models/Journal')

const getJournals = async (req, res) => {
  console.log('User making the request:', req.user)
  try {
    const journals = await journalModel.find({userId:req.user._id}).sort({ date: -1 })
    res.status(200).json({ message: 'Journals successfully fetched', journals })
  } catch (error) {
    console.error('Error while fetching Journals', error)
    res
      .status(500)
      .json({ message: 'Error  fetching the journals', error: error.message })
  }
}

const getJournal = async (req, res) => {
  const { id } = req.params

  try {
    const journal = await journalModel.findById(id)
    if (journal) {
      res.status(200).json({ message: 'Journal successfully fetched', journal })
    } else {
      res.status(404).json({ message: 'Journal Entry not found or deleted' })
    }
  } catch (error) {
    console.log('Error while fetching journal : ', error)
    res
      .status(500)
      .json({ message: 'Error fetching the jounrnal', error: error.message })
  }
}

const createJournal = async (req, res) => {
  
  const { title, description } = req.body

  try {
    const newJournalEntry = new journalModel({
      title,
      description,
      userId : req.user._id
    })
    const response = await newJournalEntry.save()

    res
      .status(201)
      .json({ message: 'Successfully created new Journal Entry', response })
  } catch (error) {
    console.error('Error in creating new Journal Entry : ', error)
    res.status(500).json({
      message: 'Error in Creating new Journal Entry',
      error: error.message,
    })
  }
}

const deleteJournal = async (req, res) => {
  const { id } = req.params

  try {

    const journal = await journalModel.findById(id)

    if(!journal || journal.userId.toString() !== req.user._id.toString()){
      return res.status(403).json({message:"Not Authorized"})
    }

    const response = await journalModel.findByIdAndDelete(id)

    if (response) {
      res
        .status(200)
        .json({ message: 'Successfully deleted the Journal Entry' })
    } else {
      res
        .status(404)
        .json({ message: 'Journal Entry not found or already deleted' })
    }
  } catch (error) {
    console.error('Error in deleting the Journal Entry', error)
    res.status(500).json({
      message: 'Error in deleting the Journal Entry',
      error: error.message,
    })
  }
}

const updateJournal = async (req, res) => {
  const { id } = req.params
  const { title, description } = req.body

  try {

    const journal = await journalModel.findById(id)
    if(!journal || journal.userId.toString()!==req.user._id.toString()){
      return res.status(403).json({message:"Not Authorized"})
    }

    const updatedJournal = await journalModel.findByIdAndUpdate(
      id,
      { title: title, description: description },
      { new: true, runValidators: true }
    )

    if (updatedJournal) {
      res.status(200).json({
        message: 'Successfully updated the Journal Entry',
        updatedJournal,
      })
    } else {
      res
        .status(404)
        .json({ message: 'Journal Entry not found or Already Deleted' })
    }
  } catch (error) {
    console.error('Error in updating the Journal Entry : ', error)
    res.status(500).json({
      message: 'Error in updating the Journal Entry',
      error: error.message,
    })
  }
}

module.exports = { getJournals,getJournal, createJournal, deleteJournal, updateJournal }
