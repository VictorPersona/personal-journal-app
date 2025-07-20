import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { Menu, X } from 'lucide-react'
import { JournalContext } from '../context/JournalProvider'

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const {logout,token} = useContext(JournalContext)
  
  return (
    <nav className="bg-white shadow-md border-b-2 border-orange-500">
      <div className="max-w-7xl mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo / Brand */}
        <Link to="/" className="text-2xl font-bold text-orange-600">
          🧡 Journalify
        </Link>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-6 items-center">
          {token &&<Link
            to="/list"
            className="text-gray-700 hover:text-orange-600 transition font-medium"
          >
            📝 List Journals
          </Link>
          }<Link
            to="/create"
            className="bg-orange-500 text-white px-4 py-2 rounded-full hover:bg-orange-600 transition"
          >
            ➕ Create Journal
          </Link>
       {token && <button onClick={()=>logout()}>Logout</button>
}</div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-orange-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      {isOpen && (
        <div className="md:hidden px-4 pb-4 flex flex-col gap-2">
          <Link
            to="/list"
            className="text-gray-700 hover:text-orange-600 transition"
            onClick={() => setIsOpen(false)}
          >
            📝 List Journals
          </Link>
          <Link
            to="/create"
            className="bg-orange-500 text-white px-4 py-2 rounded-full text-center hover:bg-orange-600 transition"
            onClick={() => setIsOpen(false)}
          >
            ➕ Create Journal
          </Link>
        </div>
      )}
    </nav>
  )
}

export default Navbar
