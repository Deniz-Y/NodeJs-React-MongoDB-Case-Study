import React from 'react';
import { Link } from 'react-router-dom';
import '../styles/VendorList.css';

const VendorList = ({ vendors, handleVendorClick }) => {
  return (
    <div className="vendors-page">
      <h1>VENDORS</h1>
      <div className="vendors-container">
        <div className="vendor-table">
          {vendors.map((vendor, index) => (
            <div key={vendor._id} className={`vendor-row ${index % 2 === 0 ? 'even-row' : 'odd-row'}`}>
              <div className="vendor-cell">{vendor.name}</div>
              <div className="vendor-cell vendor-buttons">
                <Link to={`/vendors/${vendor._id}/monthlySales`} onClick={() => handleVendorClick(vendor._id, 'monthlySales')}>
                  <button className="monthly-button">Monthly Sales</button>
                </Link>
                <Link to={`/vendors/${vendor._id}/allSales`} onClick={() => handleVendorClick(vendor._id, 'allSales')}>
                  <button className="all-button">All Sales</button>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VendorList;
