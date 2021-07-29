const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const cors = require('cors')
const port = 3000

// Use the packages

app.use( bodyParser.json() );

app.use(bodyParser.urlencoded({
    extended: true}));
app.use(cors())

// Used to check if your server is working
app.get('/', (req, res) => {
    res.send("Welcome to your server")
})

// Route that handles calendar logic
app.post('/calendari', (req, res) =>{
    console.log('Calendari')
})

// Start your server on a specified port
app.listen(port, ()=>{
    console.log("Server is running on port ${port}")
})
