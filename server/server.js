const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')
const journalRouter = require('./routes/journalRoutes')
const userRouter = require('./routes/auth.js')
require('dotenv').config()

const app = express()

const PORT = process.env.PORT || 5000
const URI = process.env.MONGODB_URI

app.use(express.json())
app.use(cors({
  origin:"*"
}))

mongoose
  .connect(URI)
  .then(() => console.log('MongoDB Connected'))
  .catch((err) => console.error('MongoDB connection error', err))

app.get('/', (req, res) => {
  res.json({ message: 'App is Listening' })
})

app.use('/journals', journalRouter)
app.use('/auth', userRouter)

app.listen(PORT, () => {
  console.log('Server has started')
})
