import { useEffect, useState } from 'react';
import BarChart from './components/BarChart';
import DoughnutChart from './components/Doughnut';
import RadarChart from './components/Radar';
import ScatterChart from './components/Scatter';


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
  return (
    <>
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
        {showBar && <div className="chart-box">
          <h6>Bar Chart of Pokemon Colour</h6>
          <BarChart></BarChart>
        </div>}
        {showDoughnut && <div className="chart-box">
          <h6>Doughnut Chart Chart of Pokemon Colour</h6>
          <DoughnutChart></DoughnutChart>
        </div>}
        {showRadar && <div className="chart-box">
          <h6>Radar Chart of Pokemon Colour</h6>
          <RadarChart></RadarChart>
        </div>}
        {showScatter && <div className="chart-box">
          <h6>Scatter Chart of Pokemon Colour</h6>
          <ScatterChart></ScatterChart>
        </div>}
      </div>
    </>
  );
}

export default App;
