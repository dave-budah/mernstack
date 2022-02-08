const mongoose = require('mongoose')
const {mongo} = require("mongoose");

const postSchema = mongoose.Schema({
    title: {
        type: String,
        trim: true,
        required: [true, 'Please add a title']
    },
    text: {
        type: String,
        require: [true, 'Please add some text']
    },

    },
    {
        timestamps: true
    })
    module.exports = mongoose.model('Post', postSchema)
