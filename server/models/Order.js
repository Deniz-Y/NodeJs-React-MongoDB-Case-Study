const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({

    _id: { type: mongoose.Schema.Types.ObjectId, required: true },
    cart_item: [
        {
            product: { type: mongoose.Schema.Types.ObjectId, ref: 'Product', required: true },
            item_count: { type: Number, required: true },
            quantity: { type: Number, required: true },
            cogs: { type: Number, required: true }
        }
    ],
    payment_at: { type: Date, required: true }

});

module.exports = mongoose.model('Order', orderSchema, 'Order');