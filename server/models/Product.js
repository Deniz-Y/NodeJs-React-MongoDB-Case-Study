const mongoose = require('mongoose');

const productSchema = new mongoose.Schema({

    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    name: { type: String, required: true },
    vendor: { type: mongoose.Schema.Types.ObjectId, ref: 'Vendor', required: true }

});

module.exports = mongoose.model('Product', productSchema, 'Product');