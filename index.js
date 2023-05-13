//Modules and Globals
require('dotenv').config()
const express = require('express')
// Initialize the app object.
const app = express()

app.use(express.json());

app.get('/', function (req, res) {
    res.send('Hello world');
});

//Controllers and routes
app.use('/books', require('./controllers/books.js'))




// Listen for connections.
app.listen(process.env.PORT)