const mongoose = require('mongoose');

const vendorSchema = new mongoose.Schema({

    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },

});

module.exports = mongoose.model('Vendor', vendorSchema, 'Vendor');
