import fetch from "node-fetch";
import axios from "axios";

const COINGLASS_API_KEY = "640ee594b3de4f8e97a7f95aaceec7bf";
const COINGLASS_API_URL = "https://open-api.coinglass.com/public/v2";

const options = {
  method: "GET",
  headers: {
    accept: "application/json",
    coinglassSecret: COINGLASS_API_KEY,
  },
};

const PERPETUAL_MARKET = "perpetual_market";
const FUNDING_RATE = "funding";
const FUNDING_USD_HISTORY = "funding_usd_history";
const OPEN_INTEREST = "open_interest";

const fetchPerpetualMarket = (symbol) => {
  var urlPerpetualMarket = `${COINGLASS_API_URL}/${PERPETUAL_MARKET}?symbol=${symbol}`;
  fetch(urlPerpetualMarket, options)
    .then((response) => {
      console.log(response);
      return response.json();
    })
    .then((response) => {
      console.log(JSON.stringify(response));
    })
    .catch((err) => console.error(err));
};
// fetchPerpetualMarket();

const fetchFundingRate = () => {
  var urlFundingRate = `${COINGLASS_API_URL}/${FUNDING_RATE}`;
  fetch(urlFundingRate, options)
    .then((response) => response.json())
    .then((response) => console.log(response))
    .catch((err) => console.error(err));
};
// fetchFundingRate();
export const fetchFundingRateHistoryUsd = async (symbol, timeFrame) => {
  var urlFundingRateHistoryUsd = `${COINGLASS_API_URL}/${FUNDING_USD_HISTORY}?symbol=${symbol}&time_type=${timeFrame}`;

  // console.log("symbol", symbol, "timeFrame", timeFrame);

  const options = {
    method: "GET",
    headers: {
      accept: "application/json",
      coinglassSecret: "640ee594b3de4f8e97a7f95aaceec7bf",
    },
  };

  const data = fetch(
    `/public/v2/funding_usd_history?symbol=${symbol}&time_type=${timeFrame}`,
    options
  )
    .then((response) => response.json())
    .then((response) => {
      return response;
    })
    .catch((err) => console.error(err));
  const a = await data;
  console.log("a", a);
  return a;
};
// fetchFundingRateHistoryUsd();

// const response = await axios.get(urlFundingRateHistoryUsd, options);
// console.log(JSON.stringify(response.data));

// const urlOpenInterest = `${COINGLASS_API_URL}/${OPEN_INTEREST}?symbol=${symbol}`;
// var openInterestData = await axios.get(urlOpenInterest, options);
// console.log(JSON.stringify(openInterestData.data));

const fetchingCoinglassData = async () => {
  // try {
  //   const response = await axios.get(
  //     `https://api.github.com/users/eunit99/repos`
  //   );
  //   setData(response.data);
  //   setError(null);
  //   console.log(data);
  // } catch (err) {
  //   setError(err.message);
  //   setData(null);
  // } finally {
  //   setLoading(false);
  // }
};
export default fetchingCoinglassData;
