import React, { useContext } from 'react'
import { JournalContext } from '../context/JournalProvider'
import { useParams } from 'react-router-dom'

const DeleteJournal = () => {
  const {backendUrl} = useContext(JournalContext)
  const params = useParams()

  const deleteJournal=async()=>{
    
  }
  return (
    <div>DeleteJournal</div>
  )
}

export default DeleteJournal