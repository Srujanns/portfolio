const express = require('express')
const contactHandler = require('./api/contact')

const app = express()
app.use(express.json())
app.post('/api/contact', (req, res) => contactHandler(req, res))

const port = process.env.PORT || 3001
app.listen(port, () => console.log(`API listening on http://localhost:${port}`))
