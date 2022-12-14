import React, { useEffect, useState } from "react";
import VerticalBarChart from "../component/VerticalBarChart";
import { faker } from "@faker-js/faker";
import Table from "react-bootstrap/Table";
import { fetchFundingRateHistoryUsd } from "../Model/fetch-coinglass";
/** periodically fetch funding rate and display
 *
 */
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
const FundingRateTable = (props) => {
  const fundingRateData = props.fundingRateData;

  return (
    <div className="table-responsive">
      <Table responsive variant="light" size="sm" striped>
        <thead className="table-header">
          <tr>
            {header.map((item, index) => (
              <th key={index}>{item}</th>
            ))}
          </tr>
        </thead>
        <tbody>
          {fundingRateData.map((element, index) => {
            const date = new Date(element.date);
            return (
              <tr key={index}>
                <td>{date.toLocaleString()}</td>
                <td>{element.binance.toFixed(4)}%</td>
                <td>{element.bybit.toFixed(4)}%</td>
                <td>{element.okx.toFixed(4)}%</td>
                <td>{element.huobi.toFixed(4)}%</td>
                <td>{element.gate.toFixed(4)}%</td>
                <td>{element.bitget.toFixed(4)}%</td>
                <td>{element.coinex.toFixed(4)}%</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

const FundingRateChart = (props) => {
  const [fundingRate, $fundingRate] = useState(null);
  const [intervalId, $intervalId] = useState(0);
  const timeLive = props.timeLive;
  const symbol = props.symbol;
  const timeFrame = props.timeFrame;

  async function fetchingFundingRate(symbol, timeFrame) {
    var curFundRateHistory = [];

    var response = await fetchFundingRateHistoryUsd(symbol, timeFrame);
    const data = response.data;
    const dataMap = data.frDataMap;
    var iCount = 0;
    if (data.dateList.length > 0) {
      for (
        let index = data.dateList.length - 1;
        index < data.dateList.length;
        index--
      ) {
        const date = data.dateList[index];
        const binance = dataMap.Binance[index];
        const bitget = dataMap.Bitget[index];
        const bybit = dataMap.Bybit[index];
        const coinex = dataMap.CoinEx[index];
        const gate = dataMap.Gate[index];
        const huobi = dataMap.Huobi[index];
        const okx = dataMap.OKX ? dataMap.OKX[index] : 0;
        const dataRow = {
          date,
          binance,
          bitget,
          bybit,
          coinex,
          gate,
          huobi,
          okx,
        };
        curFundRateHistory[iCount] = dataRow;
        iCount++;
        if (iCount >= 20) {
          break;
        }
      }
    }

    return curFundRateHistory;
  }

  useEffect(() => {
    fetchingFundingRate(symbol, timeFrame).then((response) =>
      $fundingRate(response)
    );
    const id = setInterval(() => {
      fetchingFundingRate(symbol, timeFrame).then((response) =>
        $fundingRate(response)
      );
    }, timeLive);

    return () => clearInterval(id);
  }, [timeLive, symbol, timeFrame]);

  return (
    <div className="indicator-container">
      <div className="indicator-label">Funding Rate</div>
      <div className="indicator-body">
        {fundingRate !== null ? (
          <FundingRateTable fundingRateData={fundingRate} />
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export default FundingRateChart;
