// Module
const mongoose = require('mongoose')
const { Schema } = mongoose

//Schema
const bookSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    year:{type:Number},
    quantity:{type:Number},
    imageURL:{type:String,required:true},
});

const Book = mongoose.model('Book', bookSchema);
module.exports = Book