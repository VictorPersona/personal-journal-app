import React, { useContext, useState } from 'react'
import { JournalContext } from '../context/JournalProvider'
import axios from 'axios'

const Login = () => {
  const { backendUrl, login } = useContext(JournalContext)

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
    const {id, value} = e.target
    setUserData((prev)=>({...prev,[id]:value}))
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
    }
  }
  const handleOnSubmit = async (e) => {
    e.preventDefault()
    loginState=="signup" ? await userRegister() : await userLogin()
  }

  return (
    <form onSubmit={handleOnSubmit}>
      <h2>{loginState == 'signup' ? 'Sign Up' : 'Login'}</h2>

      <input
        disabled={loginState == 'login'}
        type="text"
        name="userName"
        id="userName"
        value={userData.userName}
        placeholder="User Name"
        onChange={(e) => handleOnChange(e)}
      />
      <input
        type="email"
        name="email"
        id="email"
        placeholder="Email"
        value={userData.email}
        onChange={(e) => handleOnChange(e)}
      />
      <input
        type="password"
        name="password"
        id="password"
        placeholder="Password"
        value={userData.password}
        onChange={(e) => handleOnChange(e)}
      />
      <button type="submit">
        {loginState == 'signup' ? 'Sign Up' : 'Login'}
      </button>
      <p onClick={changeLoginState}>
        {loginState == 'signup' ? 'Login' : 'Sign Up'}
      </p>
    </form>
  )
}

export default Login
