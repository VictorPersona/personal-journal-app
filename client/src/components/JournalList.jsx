import React, { useContext } from 'react'
import JournalCard from './JournalCard'
import { JournalContext } from '../context/JournalProvider'

const JournalList = () => {
  const { allJournalData } = useContext(JournalContext)
  const journals = [
    {
      _id: '6804d79c0f22b6b25aad87d4',
      title: 'My First Entry',
      description: 'Today I started writing my journal API!',
      date: '2025-04-20T11:09:40.037Z',
      __v: 0,
    },
    {
      _id: '6804d79c0f22b6b25aad87d4',
      title: 'My First Entry',
      description: 'Today I started writing my journal API!',
      date: '2025-04-20T11:09:40.037Z',
      __v: 0,
    },
    {
      _id: '6804d79c0f22b6b25aad87d4',
      title: 'My First Entry',
      description: 'Today I started writing my journal API!',
      date: '2025-04-20T11:09:40.037Z',
      __v: 0,
    },
    {
      _id: '6804d79c0f22b6b25aad87d4',
      title: 'My First Entry',
      description:
        'Today I started writing my journal API!Lorem ipsum dolor sit amet consectetur, adipisicing elit. Explicabo distinctio culpa, illo minus aut harum autem? Neque animi doloribus impedit vel culpa. Totam, eum facilis! Necessitatibus eos quod dicta perspiciatis.',
      date: '2025-04-20T11:09:40.037Z',
      __v: 0,
    },
    {
      _id: '6804d79c0f22b6b25aad87d4',
      title: 'My First Entry',
      description: 'Today I started writing my journal API!',
      date: '2025-04-20T11:09:40.037Z',
      __v: 0,
    },
  ]

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 ls:grid-cols-3 gap-6 p-6">
      {allJournalData.map((item) => (
        <JournalCard key={item._id} journal={item} />
      ))}
    </div>
  )
}

export default JournalList
