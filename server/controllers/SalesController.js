const Product = require('../models/Product');
const Order = require('../models/Order');
const Vendor = require('../models/Vendor');
const moment = require('moment');

const getTotalSalesOfVendor = async (req, res) => {

  try {

    const vendorId = req.params.vendorId; // Get the vendor ID from the request

    // Get IDs of products belonging to the vendor
    const vendorProductIds = (await Product.find({ vendor: vendorId })).map(prod => prod._id);

    // Find orders associated with the vendor
    const vendorOrders = await Order.find({ 'cart_item.product': { $in: vendorProductIds } });

    const totalSales = [];

    for (const order of vendorOrders) {

      const orderDate = moment(order.payment_at);
      const year = orderDate.year();
      const month = orderDate.month() + 1;
      const day = orderDate.date();

      for (const item of order.cart_item) {

        const orderedProductId = item.product;
        const product = await Product.findById(orderedProductId);
        const productName = product ? product.name : 'Unknown Product';

        if (orderedProductId && vendorProductIds.some(productId => productId.equals(orderedProductId))) {

          const sale = {
            year,
            month,
            day,
            productName,
            salesAmount: item.quantity * item.item_count
          };
          
          totalSales.push(sale);
        }
      }
    }

    totalSales.sort((a, b) => {

      // Compare the years
      if (a.year !== b.year) {
        return b.year - a.year; // Sort years from largest to smallest
      }

      // If the years are equal, compare the months
      if (a.month !== b.month) {
        return b.month - a.month; // Sort months from largest to smallest
      }

      // If the months are equal, compare the days
      return b.day - a.day; // Sort days from smallest to largest
    });

    // Take the vendor name as a separate variable
    const vendor = await Vendor.findById(vendorId);
    const vendorName = vendor ? vendor.name : 'Unknown Vendor';

    res.json({ vendorName, sales: totalSales });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getMonthlySalesOfVendor = async (req, res) => {

  try {

    const vendorId = req.params.vendorId;

    // Get IDs of products belonging to the vendor
    const vendorProductIds = (await Product.find({ vendor: vendorId })).map(prod => prod._id);

    // Find orders associated with the vendor
    const vendorOrders = await Order.find({ 'cart_item.product': { $in: vendorProductIds } });

    const monthlySales = {};

    const vendor = await Vendor.findById(vendorId);
    const vendorName = vendor ? vendor.name : 'Unknown Vendor';

    vendorOrders.forEach(order => {

      const orderDate = moment(order.payment_at);
      const year = orderDate.year();

      if (!monthlySales[year]) {
        monthlySales[year] = {};
      }

      // Ensure each month is initialized with 0
      for (let i = 1; i <= 12; i++) {

        const monthName = moment().month(i - 1).format('MMMM'); // Convert month number to name
        monthlySales[year][monthName] = monthlySales[year][monthName] || 0;

      }

      // Check products in each order
      order.cart_item.forEach(item => {

        const orderedProductId = item.product;

        const monthName = orderDate.format('MMMM'); // Convert month number to name

        // Check if the product in the order belongs to the vendor's list of products
        if (orderedProductId && vendorProductIds.some(productId => productId.equals(orderedProductId))) {

          monthlySales[year][monthName] += item.quantity * item.item_count;
        }
      });
    });

    res.json({ vendorName, sales: monthlySales });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getTotalSalesOfVendor, getMonthlySalesOfVendor };