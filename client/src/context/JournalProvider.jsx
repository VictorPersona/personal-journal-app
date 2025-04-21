import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
export const JournalContext = createContext()

export const JournalProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL
  

  const [allJournalData, setAllJournalData] = useState([])

  const fetchAllJorunalData = async () => {
    try {
      const response = await axios.get(backendUrl + 'journals')
      if (response) {
        setAllJournalData(response.data.journals)
        
        
      } else {
        console.error(response.message)
      }
    } catch (error) {
      console.error('Unable to fetch the Journals')
    }
  }

  useEffect(() => {
    fetchAllJorunalData()
  }, [])

  const values = { allJournalData,backendUrl }
  return (
    <JournalContext.Provider value={values}>{children}</JournalContext.Provider>
  )
}
