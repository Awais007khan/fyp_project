const {connectToMongo} = require ('./db.js')
console.log("connected")
connectToMongo();
const express = require('express')
const app = express()
const port =5000
var cors = require('cors')
// var app = express()

app.use(cors())
// respond with "hello world" when a GET request is made to the homepage
// app.use('/api/auth', (req, res) => {
//   res.send('hello anas this is over request')
// })
app.use(express.json())
app.use('/api/auth',require('./routes/auth.js'))
app.use('/api/item',require('./routes/items.js'))

app.listen(port,()=>{
    console.log(`Example app litening at http://localhost:${port}`)
})
