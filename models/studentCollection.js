const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const Model = new Schema({
    _id: {type: String},
    name: {type: String},
    email: {type: String, trim: true, minlength: 3},
    password: {type: String, trim: true,},
    status: {type: String},
    date: {type: Date, default: Date.now},

}, 
{timestamp: true}, {required: true});
module.exports = mongoose.model("studentcollection", Model);