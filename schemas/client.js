const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const clientSchema = new Schema({
    firstName: {
        type: String,
        required: [true, 'Полето "Име" е задължително!'],
    },
    lastName: {
        type: String,
        required: [true, 'Полето "Фамилия" е задължително!'],
    },
    email: {
        type: String,
        required: [true, 'Полето "Емайл адрес" е задължително!'],
    },
    phone: {
        type: String,
        required: [true, 'Полето "Телефон" е задължително!'],
    },
    lastVisited: { type: Date, default: Date.now },
    lastNotified: { type: Date, default: Date.now },
    period: {
        type: Number,
        min: 1,
        max: 12,
        default: 6,
        required: [true, 'Полето "Период" е задължително!'],
    },
});

module.exports = clientSchema;