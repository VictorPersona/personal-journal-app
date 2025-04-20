const mongoose = require('mongoose')
const cors = require('cors')
const express = require('express')

const app = express()

const PORT = process.env.PORT || 5000

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
  res.json({message:'App is Listening'})
})

app.listen(PORT, () => {
  console.log('Server has started')
})
