const User = require('../models/UserModel')
const bcrypt = require('bcryptjs')
const jwt = require('jsonwebtoken')
require('dotenv').config()

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY
const registerUser = async (req, res) => {
  console.log(req.body)
  const { userName, email, password } = req.body

  try {
    const existingUser = await User.findOne({ email })

    if (existingUser) {
      return res.status(400).json({ message: 'Email is already Registered' })
    }

    const hashedPassword = await bcrypt.hash(password, 10)
    const newUser = new User({
      userName,
      email,
      password: hashedPassword,
    })
    await newUser.save()

    const token = jwt.sign({ id: newUser._id }, JWT_SECRET_KEY, {
      expiresIn: '1h',
    })
    res.status(201).json({ message: 'User registered', token })
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: 'Server error' })
  }
}

const loginUser = async (req, res) => {
  const { email, password } = req.body
  try {
    const user = await User.findOne({ email })
    if (!user) {
      return res.status(400).json({ message: "User dosen't exist" })
    }

    const isPasswordValid = await bcrypt.compare(password, user.password)
    if (!isPasswordValid) {
      return res.status(400).json({ message: 'Wrong Password' })
    } else {
      const token = jwt.sign({ id: user._id }, JWT_SECRET_KEY, {
        expiresIn: '1h',
      })

      return res.status(200).json({ message: 'Login Successfull', token })
    }
  } catch (error) {
    console.error(error)
    res.status(500).json({ message: error.message })
  }
}

module.exports = { registerUser, loginUser }
