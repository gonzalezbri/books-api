//Modules and Globals
require('dotenv').config()
const express = require('express')
const mongoose = require('mongoose')
// Initialize the app object.
const app = express()

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello world');
});

// MONGOOSE
mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true }, () => {
    console.log('connected to mongo on: ', process.env.MONGO_URI)
})

//Controllers and routes
app.use('/books', require('./controllers/books.js'))




// Listen for connections.
app.listen(process.env.PORT)