import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { JournalContext } from '../context/JournalProvider'
import axios from 'axios'

const EditForm = () => {
  const [journalData, setJournalData] = useState({ title: '', description: '' })
  const params = useParams()
  const { backendUrl, fetchAllJorunalData, token } = useContext(JournalContext)
  if (!backendUrl) {
    console.warn('⚠️ backendUrl is not defined in context')
  }

  const fetchJournalData = async () => {
    console.log('Token :', token)
    const response = await axios.get(backendUrl + 'journals/' + params.id, {
      headers: { Authorization: `Bearer ${token}` },
    })
    const responseData = await response.data.journal
    if (!responseData) {
      return alert('Journal not found')
    }
    setJournalData({
      title: responseData.title,
      description: responseData.description,
    })
  }
  const onChangeHandler = (e) => {
    const { id, value } = e.target
    setJournalData({ ...journalData, [id]: value })
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    if (journalData.title == '' || journalData.description == '') {
      return window.alert('Please Enter Title and Description')
    }
    try {
      const response = await axios.put(
        backendUrl + 'journals/' + params.id,
        {
          title: journalData.title,
          description: journalData.description,
        },
        { headers: { Authorization: `Bearer ${token}` } }
      )
      await fetchAllJorunalData()
      console.log('Journal Updated ', response.data)
    } catch (error) {
      console.error('Error in Updating Journal')
    }
  }

  useEffect(() => {
    fetchJournalData()
  }, [])

  return (
    <form
      className="max-w-xl mx-auto mt-8 bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4"
      action="submit"
      onSubmit={handleOnSubmit}
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        Edit Journal
      </h2>
      <div className="flex flex-col gap-1">
        <label className="text-sm font-medium text-gray-700" htmlFor="title">
          Title
        </label>
        <input
          type="text"
          name="title"
          id="title"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          value={journalData.title}
          onChange={onChangeHandler}
        />
      </div>

      <div className="flex flex-col gap-1">
        <label
          htmlFor="description"
          className="text-sm font-medium text-gray-700"
        >
          Description
        </label>
        <textarea
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
          name="description"
          id="description"
          value={journalData.description}
          onChange={onChangeHandler}
        />
      </div>
      <button
        className="mt-4 bg-purple-600 text-white font-semibold py-2 rounded-lg hover:bg-purple-700 transition-all cursor-pointer"
        type="submit"
      >
        Save Edit
      </button>
    </form>
  )
}

export default EditForm
