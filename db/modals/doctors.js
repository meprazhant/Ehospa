const mongoose = require('mongoose');

const doctorSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true,
    },
    speciality: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    phone: {
        type: String,
        required: true,
    },
    available: {
        type: Boolean,
        required: true,
    },
    image: {
        type: String,
        required: true,
    }
}, {
    timestamps: true
}
);

module.exports = mongoose.models.Doctor || mongoose.model('Doctor', doctorSchema);