const express = require('express')
const userRoutes = require("./routes/userRoutes");
const app = express()
const db = require('./config/db')

db()

app.use (express.json());

const port = 3000

app.use('/api/user', userRoutes)

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})