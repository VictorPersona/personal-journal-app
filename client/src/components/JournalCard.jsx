import React from 'react'
import { useNavigate } from 'react-router-dom'

const JournalCard = ({ journal }) => {
  const { title, description, date, _id } = journal
  const navigate = useNavigate()
  const formattedDate = new Date(date).toLocaleDateString('en-GB', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  })

  const handleOnDelete = (e) => {
    e.stopPropagation()
    navigate(`delete/${_id}`)
  }

  const handleOnEdit = (e) => {
    e.stopPropagation()
    navigate(`edit/${_id}`)
  }
  return (
    <div
      onClick={() => navigate(`/view/${_id}`)}
      className=" w-full bg-white rounded-2xl border border-gray-200 shadow-md p-6 hover:shadow-lg transition duration-200 ease-in-out"
    >
      <div className="flex items-center justify-between mb-2">
        <h2 className="text-lg font-semibold text-gray-800">{title}</h2>
        <span className="text-small text-gray-500">{formattedDate}</span>
      </div>

      <div className="text-gray-600">{description}</div>
      <div className="flex justify-end space-x-3 mt-4">
        <button
          onClick={handleOnEdit}
          className="bg-blue-500 text-white px-4 py-1 rounded-md  hover:bg-blue-600 transition"
        >
          Edit
        </button>
        <button
          onClick={handleOnDelete}
          className="bg-red-500 text-white px-4 py-1 rounded-md  hover:bg-red-600 transition"
        >
          Delete
        </button>
      </div>
    </div>
  )
}

export default JournalCard
