import React, { useContext, useState } from 'react'
import { JournalContext } from '../context/JournalProvider'
import axios from 'axios'

const JournalForm = () => {
  const [journalData, setJournalData] = useState({
    title: '',
    description: '',
  })

  const { backendUrl } = useContext(JournalContext)
  if (!backendUrl) {
    console.warn('⚠️ backendUrl is not defined in context')
  }

  const handleOnChange = (e) => {
    const { name, value } = e.target
    setJournalData({ ...journalData, [name]: value })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const response = await axios.post(backendUrl + 'journals', {
        title: journalData.title,
        description: journalData.description,
      })
      console.log(response.data.message)
    } catch (error) {
      console.error('Journal Entry creation failed due to error :', error)
    } finally {
      setJournalData({ title: '', description: '' })
    }
  }

  return (
    <form
      className="max-w-xl mx-auto mt-8 bg-white shadow-md rounded-2xl p-6 flex flex-col gap-4"
      onSubmit={handleSubmit}
    >
      <h2 className="text-2xl font-semibold text-gray-800 text-center">
        New Journal Entry
      </h2>

      <div className="flex flex-col gap-1">
        <label htmlFor="title" className="text-sm font-medium text-gray-700">
          Title
        </label>
        <input
          type="text"
          id="title"
          value={journalData.title}
          onChange={handleOnChange}
          name="title"
          placeholder="Enter a catchy title"
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
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
          id="description"
          name="description"
          placeholder="Write your thoughts..."
          rows="5"
          onChange={handleOnChange}
          value={journalData.description}
          className="px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 resize-none"
        ></textarea>
      </div>

      <button
        type="submit"
        className="mt-4 bg-blue-600 text-white font-semibold py-2 rounded-lg hover:bg-blue-700 transition-all"
      >
        Save Entry
      </button>
    </form>
  )
}

export default JournalForm
