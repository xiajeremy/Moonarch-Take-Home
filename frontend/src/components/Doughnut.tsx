import React, { useEffect, useState } from 'react';
import { Doughnut } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register necessary components for doughnut chart
ChartJS.register(ArcElement, Tooltip, Legend);

function DoughnutChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/colours')
      .then((res) => res.json())
      .then((data) => {
        const labels = data.map(item => item.colour);
        const counts = data.map(item => item.count);

        setChartData({
          labels,
          datasets: [
            {
              label: 'Name Count',
              data: counts,
              backgroundColor: [
                'rgba(75, 192, 192, 0.6)',
                'rgba(255, 99, 132, 0.6)',
                'rgba(255, 206, 86, 0.6)',
                'rgba(54, 162, 235, 0.6)',
                'rgba(153, 102, 255, 0.6)',
                'rgba(255, 159, 64, 0.6)',
              ],
              borderColor: 'rgba(255,255,255,0.8)',
              borderWidth: 2,
            },
          ],
        });
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div style={{ width: '100%', margin: 'auto', paddingTop: '2rem' }}>
      <h2>Colour Count Distribution</h2>
      {chartData ? <Doughnut data={chartData} /> : <p>Loading chart...</p>}
    </div>
  );
}

export default DoughnutChart;
