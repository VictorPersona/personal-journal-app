import React, { useContext, useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { JournalContext } from '../context/JournalProvider'
import axios from 'axios'
import { format } from 'date-fns'

const ViewJournal = () => {
  const [journalData, setJournalData] = useState({})

  const params = useParams()
  const { backendUrl,token } = useContext(JournalContext)
  const fetchJournalData = async () => {
    try {
      const response = await axios.get(backendUrl + 'journals/' + params.id,{headers:{'Authorization':`Bearer ${token}`}})
      const responseData = response.data.journal
      if (!responseData) {
        return alert('Journal Data Not found')
      }
      setJournalData(responseData)
    } catch (error) {
      console.error('Error in fetching Journal Data')
    }
  }

  useEffect(() => {
    fetchJournalData()
    
  }, [])

  const formattedDate = journalData.date
    ? format(new Date(journalData.date), 'dd MMMM yyyy')
    : ''
  const formattedTime = journalData.date
    ? format(new Date(journalData.date), 'hh:mm a')
    : ''
  return (
    <div className="flex justify-center items-center min-h-screen bg-gray-50">
      <div className=" bg-white  shadow-xl rounded-2xl p-8 w-full max-w-2xl border-t-8 border-orange-500">
        <div className="flex justify-between items-start mb-6">
          <div>
            <h1 className="text-2xl font-bold text-gray--800 mb-2">
              {journalData.title}
            </h1>
            <p className="text-gray-600">{journalData.description}</p>
          </div>
          <div className="text-right text-sm text-gray-500">
            <p className="font-semibold text-orange-600">{formattedDate}</p>
            <p>{formattedTime}</p>
          </div>
        </div>
        <hr className="my-4 border-orange-300" />
        <div className="text-sm text-gray-700 italic">
          ✍️ This journal was last updated on{' '}
          <span className="text-orange-600">{formattedDate}</span> at{' '}
          <span className="text-orange-600">{formattedTime}</span>
        </div>
      </div>
    </div>
  )
}

export default ViewJournal
