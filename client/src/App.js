import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import axios from 'axios';
import MonthlySalesChartContainer from './components/MonthlySalesChartContainer';
import AllSalesTable from './components/AllSalesTable';
import VendorList from './components/VendorList';

const App = () => {

  const [vendors, setVendors] = useState([]);
  const [saleData, setSaleData] = useState({});

  useEffect(() => {

    const fetchVendors = async () => {

      try {

        const response = await axios.get('http://localhost:5000/vendors');
        setVendors(response.data);

      } catch (error) {
        console.error('Error fetching vendors:', error);
      }
    };
    fetchVendors();
  }, []);


  const handleVendorClickAction = async (vendorId, actionType) => {

    try {

      setSaleData('');
      let url = '';

      if (actionType === 'monthlySales') {

        url = `http://localhost:5000/vendors/${vendorId}/monthlySales`;

      } else if (actionType === 'allSales') {

        url = `http://localhost:5000/vendors/${vendorId}/allSales`;
      }

      const response = await axios.get(url);
      setSaleData(response.data);

    } catch (error) {
      console.error('Error fetching sales data:', error);
    }
  };

  return (
    <Router>
      <Routes>
        <Route path="/" element={<VendorList vendors={vendors} handleVendorClick={handleVendorClickAction} />} />
        <Route path={`/vendors/:vendorId/monthlySales`} element={saleData.sales && Object.keys(saleData.sales).length > 0 && (
          <MonthlySalesChartContainer data={saleData.sales} vendorName={saleData.vendorName} />)} />
        <Route path={`//vendors/:vendorId/allSales`} element={saleData.sales && Object.keys(saleData.sales).length > 0 && (
          <AllSalesTable data={saleData.sales} vendorName={saleData.vendorName} />)} />
      </Routes>
    </Router>
  );
};

export default App;
