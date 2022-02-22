const mongoose = require('mongoose');

const articleSchema = new mongoose.Schema({
    title: String,
    body: String,
    unixDate: {
        type: Number,
        default: Math.round(Date.now() / 1000)
    },
    author: {
        type: mongoose.SchemaTypes.ObjectId,
        ref: 'User'
    }
});

module.exports = mongoose.model('article', articleSchema);