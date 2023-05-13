// Module
const mongoose = require('mongoose')

//initialize app object
const app = express();

//Schema
const bookSchema = new mongoose.Schema({
    title:{type:String,required:true},
    description:{type:String,required:true},
    year:{type:Number},
    quantity:{type:Number},
    imageURL:{type:String,required:true},
});

module.exports = mongoose.model('Books', bookSchema);