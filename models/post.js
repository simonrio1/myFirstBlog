const mongoose = require("mongoose");

const postSchema = new mongoose.Schema({
    title: String,
    content: String,
    _id: String
});

module.exports = mongoose.model('Post', postSchema);