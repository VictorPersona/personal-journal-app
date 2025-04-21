import React, { useEffect, useState, useContext } from 'react'
import { useParams } from 'react-router-dom'
import { JournalContext } from '../context/JournalProvider'
import axios from 'axios'

const EditForm = () => {
  const [journalData, setJournalData] = useState({ title: '', description: '' })
  const params = useParams()
  const { backendUrl } = useContext(JournalContext)
  if (!backendUrl) {
    console.warn('⚠️ backendUrl is not defined in context')
  }

  const fetchJournalData = async () => {
    const response = await axios.get(backendUrl + 'journals/' + params.id)
    const responseData = response.data.journal
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
      const response = await axios.put(backendUrl + 'journals/' + params.id, {
        title: journalData.title,
        description: journalData.description,
      })
      console.log("Journal Updated ",response.data)
    } catch (error) {
      console.error('Error in Updating Journal')
    }
   
  }

  useEffect(() => {
    fetchJournalData()
  }, [])

  return (
    <form action="submit" onSubmit={handleOnSubmit}>
      <h2>Edit Journal</h2>
      <div className="">
        <label htmlFor="title">Title</label>
        <input
          type="text"
          name="title"
          id="title"
          value={journalData.title}
          onChange={onChangeHandler}
        />
      </div>

      <div className="">
        <label htmlFor="description">Description</label>
        <textarea
          name="description"
          id="description"
          value={journalData.description}
          onChange={onChangeHandler}
        />
      </div>
      <button type="submit">Save Edit</button>
    </form>
  )
}

export default EditForm
