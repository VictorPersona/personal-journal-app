const jwt = require('jsonwebtoken')
const User = require('../models/UserModel.js')
require('dotenv').config()

const JWT_SECRET_KEY = process.env.JWT_SECRET_KEY

const authMiddleware = async (req, res, next) => {
  const authHeader = req.headers?.authorization

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'No token,authorization denied' })
  }
  const token = authHeader.split(' ')[1]

  try {
    const decoded = jwt.verify(token, JWT_SECRET_KEY)
    req.user = await User.findById(decoded.id).select('-password')
    next()
  } catch (error) {
    return res.status(401).json({ message: 'Invalid token' })
  }
}

module.exports = authMiddleware
