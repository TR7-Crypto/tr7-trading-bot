import "./App.css";
import VolumeChart from "./View/VolumeChart";
import FundingRateChart from "./View/FundingRateChart";
import OpenInterestChart from "./View/OpenInterestChart";
import LongShortRatioChart from "./View/LongShortRatioChart";
import { Dropdown, DropdownButton } from "react-bootstrap";
import { useState } from "react";
import { symbolList, timeFrameList } from "./Model/fetch-coinglass";
import DropdownMenu from "react-bootstrap/esm/DropdownMenu";

const NavigationBar = (props) => {
  const [symbol, $symbol] = useState("symbol");
  const [time, $time] = useState("time");
  function handleTimeFrameSelect(selection) {
    $time(selection);
    props.timeFrameSelectHandler(selection);
  }
  function handleSymbolListSelect(selection) {
    $symbol(selection);
    props.symbolSelectHandler(selection);
  }

  return (
    <header className="App-header">
      <div>TR7 Logo</div>
      <div>{props.symbol}-USDT</div>
      <div className="header-right">
        <DropdownButton
          id="dropdown-symbol"
          title={symbol}
          size="sm"
          onSelect={handleSymbolListSelect}
        >
          {symbolList.map((item, index) => {
            return (
              <Dropdown.Item eventKey={item} key={index}>
                {item}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
        <div className="header-gap"></div>
        <DropdownButton
          id="dropdown-timeframe"
          title={time}
          size="sm"
          onSelect={handleTimeFrameSelect}
        >
          {timeFrameList.map((item, index) => {
            return (
              <Dropdown.Item eventKey={item} key={index}>
                {item}
              </Dropdown.Item>
            );
          })}
        </DropdownButton>
      </div>
    </header>
  );
};

function App() {
  const [symbol, $symbol] = useState("BTC");
  const [timeFrame, $timeFrame] = useState("m1");
  function symbolSelectHandler(symbol) {
    $symbol(symbol);
  }
  function timeFrameSelectHandler(timeFrame) {
    $timeFrame(timeFrame);
  }

  return (
    <div className="App">
      <NavigationBar
        symbol={symbol}
        symbolSelectHandler={symbolSelectHandler}
        timeFrameSelectHandler={timeFrameSelectHandler}
      />
      <div className="grid-container">
        <div className="grid-item">
          <OpenInterestChart />
        </div>
        <div className="grid-item">
          <FundingRateChart
            timeLive={10000}
            symbol={symbol}
            timeFrame={timeFrame}
          />
        </div>
        <div className="grid-item">
          <LongShortRatioChart />
        </div>
        <div className="grid-item">
          <VolumeChart />
        </div>
      </div>
    </div>
  );
}

export default App;
