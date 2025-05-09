import { useEffect, useState } from 'react';
import BarChart from './components/BarChart';
import DoughnutChart from './components/Doughnut';
import RadarChart from './components/Radar';
import ScatterChart from './components/Scatter';
import APITable from './components/ApiTable';

function App() {
  const [showBar, setShowBar] = useState(false);
  const [showScatter, setShowScatter] = useState(false);
  const [showDoughnut, setShowDoughnut] = useState(false);
  const [showRadar, setShowRadar] = useState(false);


  const handleChart = (name) => {
    if(name == "Bar"){
      setShowBar(!showBar)
    } else if(name == "Scatter"){
      setShowScatter(!showScatter)
    } else if(name == "Doughnut"){
      setShowDoughnut(!showDoughnut)
    } else if(name == "Radar"){
      setShowRadar(!showRadar)
    } 
  };

  const showTable = (name) => {
    if(name == "Bar"){
      setShowBar(!showBar)
    } else if(name == "Scatter"){
      setShowScatter(!showScatter)
    } else if(name == "Doughnut"){
      setShowDoughnut(!showDoughnut)
    } else if(name == "Radar"){
      setShowRadar(!showRadar)
    } 
  };

  return (
    <div className='app'>
      <div>
        <nav className="sidebar">
          <div className="navbar-logo">Pokémon Charts</div>
          <ul className="navbar-links">
            <li onClick={() => handleChart("Bar")}>BarChart</li>
            <li onClick={() => handleChart("Doughnut")}>Doughnut Chart</li>
            <li onClick={() => handleChart("Radar")}>Radar Chart</li>
            <li onClick={() => handleChart("Scatter")}>Scatter Plot</li>
          </ul>
        </nav>
      </div>
      <div className='main'>
        {showBar && <div className="large-chart-box" onClick={() => showTable("Bar")}>
          <BarChart></BarChart>
        </div>}
        {showDoughnut && <div className="small-chart-box" onClick={() => showTable("Doughnut")}>
          <DoughnutChart></DoughnutChart>
        </div>}
        {showRadar && <div className="small-chart-box" onClick={() => showTable("Radar")}>
          <RadarChart></RadarChart>
        </div>}
        {showScatter && <div className="large-chart-box" onClick={() => showTable("Scatter")}>
          <ScatterChart></ScatterChart>
        </div>}

        <div className='table-container'>
          <APITable></APITable>
        </div>
      </div>
    </div>
  );
}

export default App;
