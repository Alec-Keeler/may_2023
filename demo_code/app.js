const express = require('express')
const app = express()
require('dotenv').config()

const groupsRouter = require('./routers/groups')

app.use(express.json())


app.use('/groups', groupsRouter)



const port = process.env.PORT
app.listen(port, () => console.log(`Listening on port ${port}...`))