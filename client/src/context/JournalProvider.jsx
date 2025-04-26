import { createContext, useContext, useState, useEffect } from 'react'
import axios from 'axios'
export const JournalContext = createContext()

export const JournalProvider = ({ children }) => {
  const backendUrl = import.meta.env.VITE_BACKEND_URL

  const [token, setToken] = useState(localStorage.getItem('token') || null)

  useEffect(() => {
    if (token) {
      localStorage.setItem('token', token)
    } else {
      localStorage.removeItem('token')
    }
  }, [token])

  const login = (token) => {
    setToken(token)
  }

  const logout = () => {
    setToken(null)
  }

  const [allJournalData, setAllJournalData] = useState([])

  const fetchAllJorunalData = async () => {
    try {
      const response = await axios.get(backendUrl + 'journals/', {
        headers: { Authorization: `Bearer ${token}` },
      })
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

  const values = {
    allJournalData,
    backendUrl,
    fetchAllJorunalData,
    login,
    logout,

    token,
  }
  return (
    <JournalContext.Provider value={values}>{children}</JournalContext.Provider>
  )
}
