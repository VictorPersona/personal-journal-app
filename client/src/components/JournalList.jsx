import React, { useContext, useEffect } from 'react'
import JournalCard from './JournalCard'
import { JournalContext } from '../context/JournalProvider'

const JournalList = () => {
  const { allJournalData, fetchAllJorunalData } = useContext(JournalContext)
  useEffect(() => {
    fetchAllJorunalData()
  }, [])

  console.log('Journal List is loading')
  console.log(allJournalData)

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ls:grid-cols-3 gap-6 p-6">
      {allJournalData.map((item) => (
        <JournalCard key={item._id} journal={item} />
      ))}
    </div>
  )
}

export default JournalList
