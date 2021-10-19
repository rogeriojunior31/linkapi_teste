const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
  value: {
    type: Number,
    required: true
  },
  date: {
    type: String,
    required: true,
  }
},
{
  timestamps: true
});

const Order = mongoose.model('Order', orderSchema);

module.exports = Order;
