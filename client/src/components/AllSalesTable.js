import React from 'react';
import '../styles/AllSalesTable.css';

const AllSalesTable = ({ data, vendorName }) => {
  
  const dataArray = Object.values(data);

  return (
    <div className="sales-table-container">
      <div className="sales-table-title-container">
        <h2 className="sales-table-title">{vendorName}'s Sales Data Table</h2>
      </div>
      <table className="sales-table">
        <thead>
          <tr>
            <th>Year</th>
            <th>Month</th>
            <th>Day</th>
            <th>Product Name</th>
            <th>Sales Amount</th>
          </tr>
        </thead>
        <tbody>
          {dataArray.map((sale, index) => (
            <tr key={index}>
              <td>{sale.year}</td>
              <td>{sale.month}</td>
              <td>{sale.day}</td>
              <td>{sale.productName}</td>
              <td>{sale.salesAmount}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllSalesTable;