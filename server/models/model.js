const mongoose = require('mongoose');

const TodoSchema = new mongoose.Schema({
    todo: {
        type: String
    },
    complete: {
        type: Boolean
    },
    memo: {
        type: String
    }
},
    { timestamps: true });

module.exports = mongoose.model('Todo', TodoSchema);