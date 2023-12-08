const Vendor = require('../models/Vendor');
const Product = require('../models/Product');


const getAllVendors = async (req, res) => {

  try {

    //const vendors = await Vendor.find({});
    const vendors = await Vendor.find({}).sort({ name: 1 });
    res.json(vendors);
    
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getVendorProducts = async (req, res) => {

  const vendorId = req.params.vendorId;
  try {

    const vendorProducts = await Product.find({ vendor: vendorId });
    //const products = await Product.find({ vendor: req.params.id }, 'name item_count quantity cogs');

    if (vendorProducts.length === 0) {
      return res.status(404).json({ message: 'No products found for this vendor.' });
    }

    res.json(vendorProducts);

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = { getAllVendors, getVendorProducts };
