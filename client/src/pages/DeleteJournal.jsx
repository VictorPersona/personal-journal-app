import React, { useContext, useEffect, useState } from 'react'
import { JournalContext } from '../context/JournalProvider'
import { useNavigate, useParams } from 'react-router-dom'
import axios from 'axios'

const DeleteJournal = () => {
  const { backendUrl, fetchAllJorunalData, token } = useContext(JournalContext)
  const params = useParams()
  const navigate = useNavigate()

  const [isDeleted, setIsDeleted] = useState(false)

  useEffect(() => {
    const deleteJournal = async () => {
      try {
        const response = await axios.delete(
          backendUrl + 'journals/' + params.id,
          { headers: { Authorization: `Bearer ${token}` } }
        )

        if (response.status == 200) {
          setIsDeleted(true)
        }
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
      {isDeleted ? (
        <p> Journal Deleted Successfully</p>
      ) : (
        <p>Deleting Journal ...</p>
      )}
    </div>
  )
}

export default DeleteJournal
