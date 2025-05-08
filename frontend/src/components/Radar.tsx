import React, { useEffect, useState } from 'react';
import { Radar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend,
} from 'chart.js';

// Register radar chart components
ChartJS.register(
  RadialLinearScale,
  PointElement,
  LineElement,
  Filler,
  Tooltip,
  Legend
);

function RadarChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/compare')
      .then((res) => res.json())
      .then((data) => {
        const labels = data.map(item => item.name);
        const stats = data.map(item => item.stats);

        setChartData({
          labels: [
            'hp',
            'attack',
            "defense",
            'special-attack',
            'special-defense',
            'speed'
          ],
          datasets: [
            {
              label: labels[0],
              data: stats[0],
              backgroundColor: 'rgba(54, 162, 235, 0.2)',
              borderColor: 'rgba(54, 162, 235, 1)',
              pointBackgroundColor: 'rgba(54, 162, 235, 1)',
              borderWidth: 2,
            },
            {
                label: labels[1],
                data: stats[1],
                backgroundColor: 'rgba(54, 162, 235, 0.2)',
                borderColor: 'rgba(54, 162, 235, 1)',
                pointBackgroundColor: 'rgba(54, 162, 235, 1)',
                borderWidth: 2,
              },
          ],
        });
      })
      .catch((err) => console.error('Error fetching data:', err));
  }, []);

  return (
    <div style={{ width: '100%', margin: 'auto', paddingTop: '2rem' }}>
      <h2>Compare Stats Radar Chart</h2>
      {chartData ? <Radar data={chartData} /> : <p>Loading chart...</p>}
    </div>
  );
}

export default RadarChart;
