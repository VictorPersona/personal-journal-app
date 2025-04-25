import React, { useContext, useEffect, useState } from 'react'
import { JournalContext } from '../context/JournalProvider'
import axios from 'axios'
import { useNavigate } from 'react-router-dom'

const Login = () => {
  const { backendUrl, login, token } = useContext(JournalContext)
  const navigate = useNavigate()
  const [loginState, setLoginState] = useState('signup')
  const [userData, setUserData] = useState({
    userName: '',
    email: '',
    password: '',
  })
  const changeLoginState = () => {
    setLoginState(loginState == 'signup' ? 'login' : 'signup')
  }
  const handleOnChange = (e) => {
    const { id, value } = e.target
    setUserData((prev) => ({ ...prev, [id]: value }))
  }

  const userRegister = async () => {
    try {
      const response = await axios.post(backendUrl + 'auth/register', {
        userName: userData.userName,
        email: userData.email,
        password: userData.password,
      })
      const token = response.data.token
      login(token)
    } catch (error) {
      console.error('Error in User Sign Up :', error.message)
    } finally {
      navigate('/')
    }
  }
  const userLogin = async () => {
    try {
      const response = await axios.post(backendUrl + 'auth/login', {
        email: userData.email,
        password: userData.password,
      })
      const token = response.data.token
      login(token)
    } catch (error) {
      console.error('Error in User Login :', error.message)
    } finally {
      navigate('/')
    }
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    loginState == 'signup' ? await userRegister() : await userLogin()
  }

  useEffect(() => {
    if (token) {
      navigate('/')
    }
  }, [])
  return (
    <div className="flex items-center justify-center min-h-screen bg-orange-50">
      <form
        onSubmit={handleOnSubmit}
        className="bg-white shadow-lg rounded-xl px-10 py-8 w-full max-w-md space-y-6 border border-orange-200"
      >
        <h2 className="text-2xl font-bold text-center text-orange-600">
          {loginState == 'signup' ? 'Sign Up' : 'Login'}
        </h2>

        {loginState == 'signup' && (
          <input
            disabled={loginState == 'login'}
            type="text"
            name="userName"
            id="userName"
            value={userData.userName}
            placeholder="User Name"
            onChange={(e) => handleOnChange(e)}
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
          />
        )}

        <input
          type="email"
          name="email"
          id="email"
          placeholder="Email"
          value={userData.email}
          onChange={(e) => handleOnChange(e)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Password"
          value={userData.password}
          className="border border-gray-300 w-full px-4 py-2 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500  "
          onChange={(e) => handleOnChange(e)}
        />
        <button
          type="submit"
          className="w-full bg-orange-600 text-white font-semibold py-2 rounded-md hover:bg-orange-700 transition"
        >
          {loginState == 'signup' ? 'Sign Up' : 'Login'}
        </button>
        <p
          onClick={changeLoginState}
          className="text-center text-sm text-orange-600 hover:underline cursor-pointer"
        >
          {loginState == 'signup'
            ? 'Already have an account? Login'
            : "Don't have an account? Sign Up"}
        </p>
      </form>
    </div>
  )
}

export default Login
