import React, { useEffect, useState } from "react";
import VerticalBarChart from "../component/VerticalBarChart";
import { faker } from "@faker-js/faker";
import Table from "react-bootstrap/Table";
import { fetchFundingRateHistoryUsd } from "../Model/fetch-coinglass";
/** periodically fetch funding rate and display
 *
 */
const labels = ["January", "February", "March", "April", "May", "June", "July"];

const data = {
  labels,
  datasets: [
    {
      label: "Dataset 1",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(255, 99, 132, 0.5)",
    },
    {
      label: "Dataset 2",
      data: labels.map(() => faker.datatype.number({ min: 0, max: 1000 })),
      backgroundColor: "rgba(53, 162, 235, 0.5)",
    },
  ],
};

const json = {
  data: {
    available: {
      profileOne: {
        a: 14,
        b: 14,
        c: 0,
        d: 0,
        e: 18,
      },
      profileTwo: {
        a: 13,
        b: 9,
        c: 0,
        d: 0,
        e: 18,
      },
    },
  },
};
const header = [
  "Time",
  "Binance",
  "Bybit",
  "OKX",
  "Huobi",
  "Gate",
  "Bitget",
  "CoinEx",
];
const FundingRateTable = () => {
  return (
    <div className="table-responsive">
      <Table responsive variant="light" size="sm" striped>
        <thead>
          <tr>
            {header.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>

          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
          <tr>
            {Array.from({ length: 8 }).map((_, index) => (
              <td key={index}>Table cell {index}</td>
            ))}
          </tr>
        </tbody>
      </Table>
    </div>
  );
};

const FundingRateChart = (props) => {
  const [fundingRate, $fundingRate] = useState(data);
  const [intervalId, $intervalId] = useState(0);
  const timeFrame = props.timeFrame;

  useEffect(() => {
    if (intervalId !== 0) {
      clearInterval(intervalId);
    }
    const id = setInterval(() => {
      async function fetchingFundingRate() {
        const data = await fetchFundingRateHistoryUsd();
        console.log("fundRate data", data);
        return data;
      }
      fetchingFundingRate().then((response) => $fundingRate(response));
    }, timeFrame);
    $intervalId(id);
    return () => clearInterval(id);
  }, [timeFrame]);
  console.log("timeFrame", timeFrame);

  return (
    <div className="indicator-container">
      <div className="indicator-label">Funding Rate</div>
      <div className="indicator-body">
        <FundingRateTable />
      </div>
    </div>
  );
};

export default FundingRateChart;
