import { useEffect, useState } from 'react';
import { Bar } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Tooltip,
  Legend,
} from 'chart.js';

// Register chart.js components
ChartJS.register(CategoryScale, LinearScale, BarElement, Tooltip, Legend);

function BarChart() {
  const [chartData, setChartData] = useState(null);

  useEffect(() => {
    // Fetch name counts from the FastAPI endpoint
    fetch('http://localhost:8000/api/types')
      .then((res) => res.json())
      .then((data) => {
        const labels = data.map((item) => item.type);
        const counts = data.map((item) => item.count);

        // Prepare chart data
        setChartData({
          labels, // X-axis labels: API names
          datasets: [
            {
              label: 'Name Count',
              data: counts, // Y-axis data: number of names
              backgroundColor: 'rgba(75, 192, 192, 0.6)', // Bar color
              borderRadius: 5,
            },
          ],
        });
      })
      .catch((err) => console.error('Error fetching data: ', err));
  }, []);

  return (
    <div style={{ width: '100%', margin: 'auto', paddingTop: '2rem' }}>
      <h2>Type Counts</h2>
      {chartData ? (
        <Bar data={chartData} />
      ) : (
        <p>Loading chart...</p>
      )}
    </div>
  );
}

export default BarChart;
