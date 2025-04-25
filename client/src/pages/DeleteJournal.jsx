import React, { useContext, useEffect } from 'react'
import { JournalContext } from '../context/JournalProvider'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const DeleteJournal = () => {
  const { backendUrl, fetchAllJorunalData } = useContext(JournalContext)
  const params = useParams()
  const navigate = useNavigate()

  useEffect(() => {
    const deleteJournal = async () => {
      try {
        const response = await axios.delete(
          backendUrl + 'journals/' + params.id,
          { headers: { Authorization: `Bearer ${token}` } }
        )
        await fetchAllJorunalData()

        navigate('/')
      } catch (error) {
        console.error('Errror in deleting Journal')
      }
    }
    deleteJournal()
  }, [])
  return (
    <div>
      <p>Deleting Journal ...</p>
    </div>
  )
}

export default DeleteJournal
