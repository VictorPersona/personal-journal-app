import React, { useContext, useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import CreateJournal from './pages/CreateJournal'
import EditJournal from './pages/EditJournal'
import DeleteJournal from './pages/DeleteJournal'
import ViewJournal from './pages/ViewJournal'
import Home from './pages/Home'
import Navbar from './components/Navbar'
import ListJournals from './pages/ListJournals'
import Login from './components/Login'
import { JournalContext } from './context/JournalProvider'

const App = () => {
  useEffect(() => {
    fetch(import.meta.env.VITE_BACKEND_URL)
      .then((res) => res.json())
      .then((data) => console.log(data.message))
  }, [])

const {token} = useContext(JournalContext)

  return (
    <div>
      <Navbar />
      {!token ? (
        <Login />
      ) : (
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/create" element={<CreateJournal />} />
          <Route path="/edit/:id" element={<EditJournal />} />
          <Route path="/delete/:id" element={<DeleteJournal />} />
          <Route path="/view/:id" element={<ViewJournal />} />
          <Route path="/list" element={<ListJournals />} />
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      )}
    </div>
  )
}

export default App
