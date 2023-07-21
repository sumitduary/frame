const mongoose = require('mongoose')

const model = new mongoose.Schema({
    name: String,
    email: String, 
    imagereference: String,
    subject: String, 
    designtype: String, 
    graphicdesignfor: String, 
    webdesignfor: String,
    description: String,
}, {timestamps:true})

module.exports = mongoose.model("Contact",model)