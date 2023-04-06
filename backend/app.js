const express = require('express')
const app = express()
require('dotenv').config()
const cors = require('cors')

const WEB_ORIGIN = 'http://localhost:3000'
app.use(cors({
  origin: WEB_ORIGIN
}))

const tbxFilesRoutes = require('./src/tbx_files/routes')

app.use(express.json())
app.use('/files', tbxFilesRoutes)

app.get('/', (req, res) => {
  res.send('This is an assesment for a recruiting process!')
})

const PORT = 3001
app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT}`)
})
