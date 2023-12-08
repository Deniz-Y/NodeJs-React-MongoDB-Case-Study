import React, { useEffect, useRef } from 'react';
import Chart from 'chart.js/auto';
import '../styles/MonthlySalesChart.css'; 

const MonthlySalesChart = ({ year, data }) => {

  const chartRef = useRef(null);
  const chartInstance = useRef(null);

  useEffect(() => {

    if (!data) return;

    const createOrUpdateChart = () => {
      
      const chartData = {
        labels: Object.keys(data),
        datasets: [
          {
            label: 'Sales Amount',
            data: Object.values(data),
            backgroundColor: '#532d3c', 
            borderWidth: 1,
          },
        ],
      };

      const options = generateOptions(year);

      const ctx = chartRef.current.getContext('2d');
      chartInstance.current = new Chart(ctx, {
        type: 'bar',
        data: chartData,
        options: options,
      });
    };

    const generateOptions = (year) => {
      return {
        plugins: {
          title: {
            display: true,
            text: `Monthly Sales - ${year}`,
            font: {
              size: 20,
              family: 'Roboto',
              weight: 'bold',
            },
            color: '#000',
          },
          legend: {
            display: true,
            labels: {
              font: {
                size: 16,
                family: 'Times New Roman',
                weight: 300,
              },
            },
          },
        },
        scales: {
          x: {
            title: {
              display: true,
              text: 'Months', 
              font: {
                size: 18,
                family: 'Times New Roman',
                weight: 'bold',
              },
              color: '#000000ab',
            },
            ticks: {
              font: {
                size: 16, 
                family: 'Times New Roman',
                weight: 300,
              },
            },
          },
          y: {
            title: {
              display: true,
              text: 'Sales Amount', 
              font: {
                size: 18,
                family: 'Times New Roman',
                weight: 'bold',
              },
              color: '#000000ab',
            },
            ticks: {
              font: {
                size: 16,
                family: 'Times New Roman',
                weight: 300,
              },
            },
            beginAtZero: true,
          },
        },
      };
    };

    if (chartRef.current) {
      createOrUpdateChart();
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data, year]);

  return (
    <div className="sales-chart-container">
      <div>
        <canvas ref={chartRef}></canvas>
      </div>
    </div>
  );
};

export default MonthlySalesChart;
