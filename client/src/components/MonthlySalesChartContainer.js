import React, { useEffect } from 'react';
import MonthlySalesChart from './MonthlySalesChart';
import '../styles/MonthlySalesChartContainer.css';

const MonthlySalesChartContainer = ({ data, vendorName }) => {

  useEffect(() => {
    // Destroy previous graphics instance every time it is re-rendered
    return () => {
      
      const canvasElements = document.querySelectorAll('canvas');

      canvasElements.forEach(canvas => {

        const chartInstance = canvas.chartInstance;
        if (chartInstance) {
          chartInstance.destroy();
        }

      });
    };
  }, []);

  return (
    <div className="sales-chart-wrapper">
      <h2>{vendorName}'s monthly sales charts</h2>
      {Object.keys(data).map((year) => (
        <MonthlySalesChart year={year} data={data[year]} />
      ))}
    </div>
  );
};

export default MonthlySalesChartContainer;