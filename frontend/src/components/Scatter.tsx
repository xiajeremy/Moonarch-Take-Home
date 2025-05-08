import React, { useEffect, useState } from 'react';
import { Scatter } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  LinearScale,
  PointElement,
  Tooltip,
  Legend,
  Title,
} from 'chart.js';

// Register necessary components for scatter chart
ChartJS.register(LinearScale, PointElement, Tooltip, Legend, Title);

function ScatterChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    fetch('http://localhost:8000/api/height_weight')
      .then(res => res.json())
      .then(data => {
        // Map each Pokémon to a scatter plot point
        const scatterPoints = data.map(pokemon => ({
          x: pokemon.height,
          y: pokemon.weight,
          label: pokemon.name
        }));

        setChartData({
          datasets: [
            {
              label: 'Pokémon Height vs Weight',
              data: scatterPoints,
              backgroundColor: 'rgba(255, 99, 132, 0.6)',
              pointRadius: 5,
            },
          ],
        });
      })
      .catch(err => console.error('Error fetching data:', err));
  }, []);

  const options = {
    responsive: true,
    plugins: {
      legend: { display: true },
      tooltip: {
        callbacks: {
          label: function (ctx) {
            const point = ctx.raw;
            return `${point.label}: Height ${point.x}, Weight ${point.y}`;
          },
        },
      },
      title: {
        display: true,
        text: 'Scatter Plot of Pokémon Height vs Weight',
      },
    },
    scales: {
      x: {
        title: {
          display: true,
          text: 'Height',
        },
      },
      y: {
        title: {
          display: true,
          text: 'Weight',
        },
      },
    },
  };

  return (
    <div style={{  width: '100%', margin: 'auto', paddingTop: '2rem' }}>
      <h2>Pokémon Scatter Plot</h2>
      {chartData ? <Scatter data={chartData} options={options} /> : <p>Loading...</p>}
    </div>
  );
}

export default ScatterChart;
