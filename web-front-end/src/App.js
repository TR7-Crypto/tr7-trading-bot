import "./App.css";
import VolumeChart from "./View/VolumeChart";
import FundingRateChart from "./View/FundingRateChart";
import OpenInterestChart from "./View/OpenInterestChart";
import LongShortRatioChart from "./View/LongShortRatioChart";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";

const NavigationBar = () => {
  return (
    <header className="App-header">
      <div>TR7 Logo</div>
      <div className="header-right">
        <DropdownButton id="dropdown-token" title="Symbol" size="sm">
          <Dropdown.Item href="#/action-1">BTC</Dropdown.Item>
          <Dropdown.Item href="#/action-2">ETH</Dropdown.Item>
          <Dropdown.Item href="#/action-3">CHZ</Dropdown.Item>
        </DropdownButton>
        <div className="header-gap"></div>
        <DropdownButton id="dropdown-timeframe" title="Time" size="sm">
          <Dropdown.Item href="#/action-1">m1</Dropdown.Item>
          <Dropdown.Item href="#/action-2">m5</Dropdown.Item>
          <Dropdown.Item href="#/action-3">h8</Dropdown.Item>
        </DropdownButton>
      </div>
    </header>
  );
};

function App() {
  const [symbol, $symbol] = useState("BNB");
  const [timeFrame, $timeFrame] = useState("m1");

  return (
    <div className="App">
      <NavigationBar />
      <div className="grid-container">
        <div className="grid-item">
          <VolumeChart />
        </div>
        <div className="grid-item">
          <FundingRateChart
            timeLive={10000}
            symbol={symbol}
            timeFrame={timeFrame}
          />
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
