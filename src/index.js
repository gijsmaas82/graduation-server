const express = require("express")
const cors = require("cors")
const bodyParser = require("body-parser")
const userRouter = require('./User/router')

const app = express()
app.use(
  cors(),
  bodyParser.json(),
  userRouter
)

const port = process.env.PORT || 4000
app.listen(port, () => console.log(`Listening to :${port}`))