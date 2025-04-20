import React from 'react'
import JournalCard from './JournalCard'

const JournalList = (journal) => {
  const journalData = {
    title: 'My First Entry',
    description: 'Today I started writing my journal API!',
    date: '20th March 2025',
  }

  return (
    <div className="">
      <JournalCard journal={journalData} />
      <JournalCard journal={journalData} />
      <JournalCard journal={journalData} />
      <JournalCard journal={journalData} />
    </div>
  )
}

export default JournalList
