import React from "react";
import HorizontalBarChart from "../component/HorizontalBarChart";

const LongShortRatioChart = () => {
  return (
    <div className="indicator-container">
      <div className="indicator-label">Long/Short Ratio</div>
      <div className="indicator-body">
        <HorizontalBarChart />
      </div>
    </div>
  );
};

export default LongShortRatioChart;
