import "./App.css";
import VolumeChart from "./View/VolumeChart";
import FundingRateChart from "./View/FundingRateChart";
import OpenInterestChart from "./View/OpenInterestChart";
import LongShortRatioChart from "./View/LongShortRatioChart";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div>Navigation Menu</div>
        <div>Time Frame</div>
      </header>
      <div className="grid-container">
        <div className="grid-item">
          <VolumeChart />
        </div>
        <div className="grid-item">
          <FundingRateChart timeFrame={10000} />
        </div>
        <div className="grid-item">
          <OpenInterestChart />
        </div>
        <div className="grid-item">
          <LongShortRatioChart />
        </div>
      </div>
    </div>
  );
}

export default App;
