import React, { useContext } from 'react'
import JournalCard from './JournalCard'
import { JournalContext } from '../context/JournalProvider'

const JournalList = () => {
  const { allJournalData, fetchAllJorunalData } = useContext(JournalContext)
  useContext(()=>{fetchAllJorunalData()},[])

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ls:grid-cols-3 gap-6 p-6">
      {allJournalData.map((item) => (
        <JournalCard key={item._id} journal={item} />
      ))}
    </div>
  )
}

export default JournalList
