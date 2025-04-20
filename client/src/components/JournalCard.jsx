import React from 'react'

const JournalCard = ({journal}) => {
  const { title, description, date } = journal
  return (
    <div className=" flex flex-col gap-3 bg-gray-100 cursor-pointer px-5 py-2 border rounded-lg w-full">
      <div className="">
      
        <div className="">{title}</div>
        <div className="">{date}</div>
      </div>

      <div className="">{description}</div>
    </div>
  )
}

export default JournalCard
