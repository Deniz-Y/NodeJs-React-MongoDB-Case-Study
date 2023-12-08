const express = require('express');
const router = express.Router();
const { getMonthlySalesOfVendor, getTotalSalesOfVendor } = require('../controllers/SalesController.js');
const { getAllVendors, getVendorProducts } = require('../controllers/VendorController.js');

router.get('/', getAllVendors);
router.get('/:vendorId/allSales', getTotalSalesOfVendor);
router.get('/:vendorId/products', getVendorProducts);
router.get('/:vendorId/monthlySales', getMonthlySalesOfVendor);
module.exports = router;