let mongoose = require('mongoose');

let MessageSchema = new mongoose.Schema({
    text: {required: true, type: String, minlength: [3, "Message length needs to be greater than 3 characters"]}
}, {timestamps: true});

module.exports = mongoose.model('Message', MessageSchema);
