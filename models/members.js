const mongoose = require('mongoose');


const membersSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    selectedBy: {
        type: String
    }

}, {
    timestamps: true
});




const Members = mongoose.model('Members', membersSchema);

module.exports = Members;