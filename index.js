const express = require('express')
const app = express()
const cors = require('cors')
require('./models/config')
const sData = require('./data.json')
const userDetails = require('./routers/userroutes')
app.use(cors())
app.use(express.json())
app.get('/', (req, res) => {
    res.send("sdata")
})
app.use('/user', userDetails)
app.use('*', (req, res) => {
    res.status(501).json({ message: "The server either does not recognize the request method, or it lacks the ability to fulfil the request. Usually this implies future availability" })
})

app.listen(2345, () => {
    console.log("connected")
})